const bcrypt = require("bcrypt");
const UsersCollection = require("../../models/UserSchema.js"); // Adjust path as necessary

const isValidPassword = (password) => {
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  return reg.test(password);
};

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  return re.test(String(email).toLowerCase());
}

async function hashpassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

const UserSignup = async (req, res) => {
  try {
    const { username, email, password, phonenumber } = req.body;
    console.log(req.body);

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Email id is not valid",
        success: false,
      });
    }

    const existingUser = await UsersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({
        message:
          "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        success: false,
      });
    }

    const hashedPassword = await hashpassword(password);

    const newUser = new UsersCollection({
      username,
      email,
      password: hashedPassword,
      phonenumber,
      otp: {
        code: null,
        createdAt: null,
      },
    });

    await newUser.save();
    return res.status(200).json({
      message: "Signed up Successfully. Please login to continue!",
      success: true,
    });
  } catch (error) {
    console.log(`Error in signup ${error}`);
    return res.status(500).json({
      message: "Internal Server Handling",
    });
  }
};

module.exports = UserSignup;
