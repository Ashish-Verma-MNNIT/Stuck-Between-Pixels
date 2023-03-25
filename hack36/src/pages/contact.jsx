const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="mb-4 text-2xl font-bold">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-bold text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
