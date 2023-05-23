import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      first,
      last,
      company,
      message,
    };
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="bg-cyan-900 min-h-screen flex flex-col">
      <h2 className="pt-20 mx-auto text-slate-300 text-3xl">
        contact shelleymcq
      </h2>
      <div className="bg-slate-900 text-slate-300 flex flex-col shadow-2xl rounded-xl m-2 p-3 md:m-4 lg:m-10 lg:p-10">
        <form onSubmit={handleSubmit} className="px-20 py-6">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              className="rounded-sm bg-slate-400 text-slate-900 p-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex pt-4">
            <div className="flex flex-col w-1/2 pr-2">
              <label htmlFor="first">First name</label>
              <input
                id="first"
                type="text"
                name="first"
                className="rounded-sm bg-slate-400 text-slate-900 p-2"
                onChange={(e) => setFirst(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2 pl-2">
              <label htmlFor="first">Last name</label>
              <input
                id="last"
                type="text"
                name="last"
                className="rounded-sm bg-slate-400 text-slate-900 p-2"
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
          </div>
          <div className="flex pt-4">
            <div className="flex flex-col w-full">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                className="rounded-sm bg-slate-400 text-slate-900 p-2"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="flex pt-4">
            <div className="flex flex-col w-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="rounded-sm bg-slate-400 text-slate-900 p-2"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="mt-10 p-2 rounded-md bg-cyan-700">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
