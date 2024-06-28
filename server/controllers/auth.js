import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

import users from '../models/auth.js'
import { mailFunctionByMailData } from './mail.js';


const HTMLContentBasedUser = async (userType) => {
    switch (userType) {
        case 'candidate':
            return {
                html:
                    `
                    <div
                        style="background-color:#FAF1EA; color: #333; font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
                        <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711390575/Hotel%20Journals/b5icroi6uetoui9uno1j.png"
                            alt="Hotel Journals" height="200" style="margin-bottom: 20px; object-fit: cover; width: 100%;">
                            <div style="padding: 40px;">
                                <h1 style="font-size: 19px; text-transform: capitalize;font-weight: bold; margin-bottom: 20px; text-align: center;">
                                    ¡BIENVENIDA/O A HOTEL JOURNALS!
                                </h1>
                                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                                    <b> Hola Compi! </b>
                                    <br>
                                        <b> Estamos muy felices de contar contigo! </b>
                                </p>
                                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                                    <b>
                                        Queremos que Hotel Journals te acompañe en
                                        tu proceso de crecimiento profesional y personal. Puedes
                                        encontrar cursos, ofertas de trabajo y consejos en nuestra
                                        página web!
                                    </b>
                                </p>

                                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                                    <b>
                                        Estate atenta/o a nuestras últimas actualizaciones y nos vemos por nuestras redes sociales :)
                                    </b>
                                </p>

                                <p style="font-size: 14px; font-weight: bold; margin-top:50px;line-height: 1.5; margin-bottom: 20px; text-align:center;">¡Un
                                    abrazo!<br />Equipo de Hotel Journals</p>
                                <p style="font-size: 14px; font-style: italic; line-height: 1.5; margin-bottom: 20px; text-align:center;">
                                    Hotel Journals, en busca de un sector más justo.</p>
                                <hr style="border: 0; border-bottom: 2px solid #ccc; margin-bottom: 20px;">
                                    <div style="margin-bottom: 20px; text-align: center;">
                                        <a href="https://www.youtube.com/@Hoteljournals" style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/YT.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                        <a href="https://www.instagram.com/hoteljournals" style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/insta.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                        <a href="https://www.linkedin.com/company/hotel-journals" style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/LinkedIn.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                        <a href="https://open.spotify.com/show/3xOjX5LUyM4XUhL9FRTkOo?si=qxabYKhHRD2Aea_utnQYYg"
                                            style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/spotify.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                        <a href="https://www.tiktok.com/@hoteljournals" style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/tiktok.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                    </div>
                                    <p style="font-size: 14px; line-height: 1.5; text-align: center;">Copyright © 2024 Hotel Journals</p>
                            </div>
                    </div>
                    `
            }
        case 'recruiter':
        case 'educator':
            return {
                html:
                    `
                    <div
                        style="background-color:#FAF1EA; color: #333; font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
                        <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711390575/Hotel%20Journals/b5icroi6uetoui9uno1j.png"
                            alt="Hotel Journals" height="200" style="margin-bottom: 20px; object-fit: cover; width: 100%;">
                            <div style="padding: 40px;">
                                <h1 style="font-size: 19px; font-weight: bold; margin-bottom: 20px; text-align: center;">
                                    !BIENVENIDA/O A Hotel Journals!
                                </h1>
                                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                                    <b> Hola Compi! </b>
                                    <br>
                                        <b> Estamos muy felices de contar contigo! </b>
                                </p>
                                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                                    <b>
                                        Queremos que Hotel Journals te acompañe en tu
                                        proceso de crecimiento empresarial,
                                        acercándote a profesionales del sector.
                                    </b>
                                </p>

                                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                                    <b>
                                        Estate atenta/o a nuestras últimas actualizaciones y nos
                                        vemos por nuestras redes sociales :)

                                    </b>
                                </p>
                                <p style="font-size: 14px; margin-top: 50px; font-weight: bold; line-height: 1.5; margin-bottom: 20px; text-align:center;">
                                    ¡Un abrazo!
                                    <br />Equipo de Hotel Journals
                                </p>
                                <p style="font-size: 14px; font-style: italic; line-height: 1.5; margin-bottom: 20px; text-align:center;">
                                    Hotel Journals, en busca de un sector más justo.</p>
                                <hr style="border: 0; border-bottom: 2px solid #ccc; margin-bottom: 20px;">
                                    <div style="margin-bottom: 20px; text-align: center;">
                                        <a href="https://www.youtube.com/@Hoteljournals" style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/YT.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                        <a href="https://www.instagram.com/hoteljournals" style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/insta.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                        <a href="https://www.linkedin.com/company/hotel-journals" style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/LinkedIn.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                        <a href="https://open.spotify.com/show/3xOjX5LUyM4XUhL9FRTkOo?si=qxabYKhHRD2Aea_utnQYYg"
                                            style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/spotify.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                        <a href="https://www.tiktok.com/@hoteljournals" style="text-decoration: none;">
                                            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/tiktok.png"
                                                style="height: 50px; width: 50px;" alt="Icon 1">
                                        </a>
                                    </div>
                                    <p style="font-size: 14px; line-height: 1.5; text-align: center;">Copyright © 2024 Hotel Journals</p>
                            </div>
                    </div>
                `
            };
    }
}


export const signup = async (req, res) => {
    const { firstName, lastName, email, password,
        confirmPassword, country_code, phone_no, user_type } = req.body;
    console.log(req.body);
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            console.log("user Already Exists");
            return res.status(401).json({ success: false, message: 'User Already Exists ' })
        }
        if (!firstName || !lastName || !email || !password
            || !confirmPassword || !country_code || !phone_no || !user_type) {
            console.log("Please fill all the fields . ");
            return res.status(401).json({ success: false, message: 'Please fill all the fields  ' })
        }
        if (password !== confirmPassword) {
            console.log("Password doesn't match");
            return res.status(401).json({ success: false, message: 'Password does not match ' })
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({
            fname: firstName,
            lname: lastName,
            email,
            password: hashedPassword,
            country_code,
            phone: phone_no,
            userType: user_type
        });

        const htmlContent = await HTMLContentBasedUser(user_type);
        const mailData = {
            to: email,
            subject: "Bienvenida a Hotel Journals",
            html: htmlContent.html
        }

        mailFunctionByMailData(mailData).then((result) => {
            if (result.success) {
                // return res.status(200).json({ success: true, message: "Email sent successfully" })
                console.log('Email sent successfully');
            }
        }).catch((err) => {
            console.log('Error in signup Mail Controller', err);
            // return res.status(500).json({ success: false, message: "Internal Server Error" })
        })

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return res.status(201).json({ success: true, result: newUser, token })
    } catch (err) {
        // return res.status(500).json({ success: false, message: `Something went wrong from server: ${err.message}` });
        return res.status(500).json({ success: false, message: ` Something went wrong ` });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (!email || !password) {
            console.log("Please fill all the fields . ");
            return res.status(401).json({ success: false, message: 'Please fill all the fields ' })
        }
        if (!existingUser) {
            return res.status(404).json({ success: false, message: 'Please Create Account' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ success: false, message: 'Invalid Credentials' });
        } else {
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
            return res.status(200).json({ success: true, result: existingUser, token })
        }
    } catch (err) {
        return res.status(500).json({ success: false, message: `Something went wrong ` });
    }
}





export const forgetPassword = async (req, res) => {
    const { mail } = req.body;
    try {
        const existingUser = await users.findOne({ email: mail })
        if (!existingUser) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '10m' })

        const mailData = {
            to: mail,
            subject: "Reset Password",
            html:
                `
                <div style="background-color:#FAF1EA; color: #333; font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
        <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711390575/Hotel%20Journals/b5icroi6uetoui9uno1j.png"
            alt="Hotel Journals" height="200" style="margin-bottom: 20px; object-fit: cover; width: 100%;">
        <div style="padding: 40px;">
            <h1 style="font-size: 19px; font-weight: bold; margin-bottom: 20px; text-align: center;">
                Recuperación de contraseña
            </h1>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                <b> Hola Compi! </b>
            </p>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                <b>
                    Parece que has olvidado la contraseña, pero con todo lo que
                    tenemos en la cabeza ¡Es normal!
                    Si es así, pulsa en el siguiente enlace:
                </b>
            </p>
            <div style="text-align: center; margin-bottom: 20px;">
                <a href="${process.env.CLIENT_URL}/reset-password/${token}"
                    style="padding: 20px; background: #E4B49D; border-radius: 50px; font-size: 14px; font-weight: bold; border: 1px solid whitesmoke; text-decoration: none; color: #333; display: inline-block;">
                    Recuperar contraseña
                </a>
                <p style="font-size: 16px; line-height: 1.5; text-align: center; margin-top: 10px;">
                    El enlace caducará en 10 minutos.
                </p>
            </div>
            <p style="font-weight: bold; font-size: smaller; text-align: center;">
                Si no has olvidado tu contraseña puedes
                ignorar este mensaje.
            </p>
            <p style="font-size: 14px; margin-top: 50px; font-weight: bold; line-height: 1.5; margin-bottom: 20px; text-align: center;">
                ¡Un abrazo
                <br />Equipo de Hotel Journals
            </p>
            <p style="font-size: 14px; font-style: italic; line-height: 1.5; margin-bottom: 20px; text-align: center;">
                Hotel Journals, en busca de un sector más justo.
            </p>
            <hr style="border: 0; border-bottom: 2px solid #ccc; margin-bottom: 20px;">
            <div style="margin-bottom: 20px; text-align: center;">
                <a href="https://www.tiktok.com/@hoteljournals" style="text-decoration: none;">
                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/tiktok.png"
                        style="height: 50px; width: 50px;" alt="Icon 1">
                </a>
                <a href="https://www.instagram.com/hoteljournals" style="text-decoration: none;">
                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/insta.png"
                        style="height: 50px; width: 50px;" alt="Icon 1">
                </a>
                <a href="https://www.linkedin.com/company/hotel-journals" style="text-decoration: none;">
                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/LinkedIn.png"
                        style="height: 50px; width: 50px;" alt="Icon 1">
                </a>
                <a href="https://open.spotify.com/show/3xOjX5LUyM4XUhL9FRTkOo?si=qxabYKhHRD2Aea_utnQYYg"
                    style="text-decoration: none;">
                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/spotify.png"
                        style="height: 50px; width: 50px;" alt="Icon 1">
                </a>
                <a href="https://www.youtube.com/@Hoteljournals" style="text-decoration: none;">
                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/YT.png"
                        style="height: 50px; width: 50px;" alt="Icon 1">
                </a>
            </div>
            <p style="font-size: 14px; line-height: 1.5; text-align: center;">Copyright © 2024 Hotel Journals</p>
        </div>
    </div>
            `
        }

        mailFunctionByMailData(mailData).then((result) => {
            if (result.success) {
                return res.status(200).json({ success: true, message: "Email sent successfully" })
            }
        }).catch((err) => {
            console.log('Error in forgetPassword', err);
            return res.status(500).json({ success: false, message: "Internal Server Error" })
        })
    } catch (err) {
        console.log("Error in forgetPassword", err);
        return res.status(500).json({ success: false, message: "Something went wrong" })
    }
}

export const resetPasswordToken = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ success: false, message: "Invalid or expired token" })
        }

        const existingUser = await users.findById({ _id: decodedToken.userId });
        console.log('this is the existing user', existingUser)
        if (!existingUser) {
            return res.status(404).json({ success: false, message: "User not exists" })
        }
        // Hashing new password 
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        existingUser.password = hashedPassword;
        await existingUser.save();
        // Send success response
        res.status(200).send({ message: "Password updated" });

    } catch (err) {
        console.log("Error in resetPasswordToken", err);
        return res.status(500).json({ success: false, message: "Something went wrong" })
    }
}
