const EmailTemplate = {
    ACCOUNT_VERIFICATION: `<div style="background-color:#f5f5f5; padding:40px 10px 40px 10px; width:100%;">
    <h1 style="text-align:center; color:gray; margin-bottom:40px;">Doctors Digital</h1>
    <div style="background-color:white; padding:20px; border-radius:5px; max-width:600px; margin:auto; box-shadow:0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color:#333; text-align:center;">Verify Your Email Address</h2>
        <p style="color:#555; line-height:1.6;">
            Dear ##USER_NAME##,
        </p>
        <p style="color:#555; line-height:1.6;">
            Thank you for creating an account with Doctors Digital! To complete your registration, please verify your email address by clicking the button below:
        </p>
            <a href="##LINK##" style="cursor:pointer; background-color:#4CAF50; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; margin:30px 0px 30px 0px;">Verify Email</a>
        <p style="color:#555; line-height:1.6;">
            If the button above doesn't work, you can also verify your email by clicking on the following link:
        </p>
        <p style="color:#555; word-break:break-all;">
            <a href="##LINK##" style="color:#4CAF50;">##LINK##</a>
        </p>
        <p style="color:#555; line-height:1.6;">
            If you did not create an account with Doctors Digital, please ignore this email.
        </p>
        <p style="color:#555; line-height:1.6;">
            Thank you for joining Doctors Digital!
        </p>
        <p style="color:#555; line-height:1.6;">
            Best regards,<br>
            The Doctors Digital Team
        </p>
        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;">
        <p style="color:#999; font-size:12px; line-height:1.6; text-align:center;">
            &copy; 2024 Doctors Digital. All rights reserved.
        </p>
    </div>
</div>
`
}
export default EmailTemplate;