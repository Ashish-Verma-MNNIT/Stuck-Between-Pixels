const About = () => {
  return (
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="mt-8 lg:mt-12">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          About Us
        </h1>
        <p className="mb-8 text-lg sm:text-xl lg:text-2xl">
          We are a team of developers dedicated to building awesome software.  <br>
          </br>
          <br></br>
            Team Name : Stuck-Between-Pixels<br></br>
            <br></br>Ashish Verma
            <br></br>Priyanshu Raj
            <br></br>Megha Rai
            <br></br>Dharmendra
        </p>
        <div className="lg:flex">
          <div className="mb-8 lg:mb-0 lg:pr-12">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl lg:text-3xl">
              Our Mission
            </h2>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl">
              Our mission is to make the world a better place through technology.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold sm:text-2xl lg:text-3xl">
              Our Values
            </h2>
            <ul className="pl-4 mb-8 list-disc sm:pl-8">
              <li className="mb-2 text-lg sm:text-xl lg:text-2xl">Innovation</li>
              <li className="mb-2 text-lg sm:text-xl lg:text-2xl">Quality</li>
              <li className="mb-2 text-lg sm:text-xl lg:text-2xl">
                Collaboration
              </li>
              <li className="mb-2 text-lg sm:text-xl lg:text-2xl">Creativity</li>
              <li className="mb-2 text-lg sm:text-xl lg:text-2xl">Integrity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
