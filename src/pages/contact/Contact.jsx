import handshake1 from "./handshake1.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { userSchema } from "../../Validations/UserValidation";
import { BackButton } from "../../components/BackButton";

const Contact = () => {
  const [email, setEmail] = useState("");

  const notify = async () => {
    let formData = {
      email,
    };
    const isValid = await userSchema.isValid(formData);
    if (isValid == true) {
      setEmail("");
      toast.success("Thank you for making contact!");
    } else toast.error("Email invalid!");
  };
  return (
    <div className="sm:grid bg-background rounded-3xl flex shadow-2xl flex-col sm:grid-cols-4">
      <BackButton />
      <div className=" p-6 col-span-3">
        <h1 className="flex xl:text-4xl py-3 font-bold items-center justify-center">
          Let's work together!
        </h1>
        <img
          title="https://dribbble.com/shots/5338247-Handshake-Icon"
          className="rounded-3xl"
          src={handshake1}
        ></img>
      </div>
      <div>
        <div className="col-span-1  w-full h-full items-center sm:pt-9 sm:pr-9 sm:pb-9 p-9  gap-3  flex flex-col">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="h-fit rounded-3xl focus:outline-none py-3 pl-3 w-full"
            placeholder="yourmail@.gmail.com"
            value={email}
          ></input>

          <textarea
            className="h-full rounded-3xl focus:outline-none  py-6 pl-3  w-full align-top"
            placeholder="Say something"
          ></textarea>

          <button
            onClick={notify}
            className="h-fit rounded-3xl px-6 py-2 font-bold bg-teal hover:text-background  text-black text-opacity-60 w-fit"
          >
            Send
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
