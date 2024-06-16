import { fireBaseDB } from "@firebase_config/App";
import DatabaseConstants from "@firebase_config/DatabaseConstants";
import { addDoc, collection } from "firebase/firestore";
import EmailTemplate from "./EmailTemplate";

async function sendAccountVerificationEmail(firstname, email, link) {
    try {
        let body = EmailTemplate.ACCOUNT_VERIFICATION;

        body = body.replaceAll("##USER_NAME##", firstname);
        body = body.replaceAll("##LINK##", link);

        console.log(body);

        const emailCollection = collection(fireBaseDB, DatabaseConstants.EMAIL_COLLECTION);
        const emailData = {
            to: [email],
            message: {
                subject: "Your Account has been created Successfully! Please Verify.",
                html: body
            }
        };

        await addDoc(emailCollection, emailData);
        console.log("Email added to Firestore successfully");
    } catch (error) {
        console.error("Error adding email to Firestore:", error);
    }
}

export default { sendAccountVerificationEmail };
