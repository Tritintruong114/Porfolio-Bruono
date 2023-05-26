import handshake1 from "./handshake1.webp";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="sm:grid flex shadow-2xl flex-col sm:grid-cols-4">
      <div className="p-9 col-span-3 w-full h-full">
        <img
          title="https://dribbble.com/shots/5338247-Handshake-Icon"
          className="object-cover w-full h-full"
          src={handshake1}
        ></img>
      </div>

      <div>
        <div className="col-span-1  w-full h-full items-center pt-9 pr-9 pb-9  gap-3  flex flex-col">
          <input
            className="h-fit focus:outline-none py-6 pl-3 w-full"
            placeholder="yourmail@.gmai.com"
          ></input>

          <textarea
            className="h-full focus:outline-none  py-6 pl-3  w-full align-top"
            placeholder="Say something"
          ></textarea>

          <button
            onClick={notify}
            className="h-fit px-6 py-2 bg-mahogany-200 w-fit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
