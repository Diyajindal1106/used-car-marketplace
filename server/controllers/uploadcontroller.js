const cloudinary = require("../config/cloudinary");

exports.uploadImage = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                message: "No image selected",
            });

        }

        const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

        const result = await cloudinary.uploader.upload(base64, {

            folder: "driveluxe",

        });

        res.json({

            image: result.secure_url,

        });

    }

    catch (error) {

       console.error("UPLOAD ERROR:", error);

       res.status(500).json({

            message: error.message,

        });

    }

};