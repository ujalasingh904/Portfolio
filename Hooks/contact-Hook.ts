import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const ContactHook = (): {
  loading: boolean;
  Contact: (formData: {}) => Promise<void>;
} => {
  const [loading, setLoading] = useState(false);

    const Contact = async (formData: {}) => {
        setLoading(true);

        try {
        const { data: res } = await axios.post(
            "https://ujalaportfolio.vercel.app/api/send-email",
            formData,
            {
            headers: {
                "Content-Type": "application/json",
            },
            }
        );

        if (res.error) {
            throw new Error(res.error);
        }
        toast.success("Email sent successfully!");
        } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to send email.");
        } finally {
        setLoading(false);
        }
    };

  return { loading, Contact };
};

export default ContactHook;
