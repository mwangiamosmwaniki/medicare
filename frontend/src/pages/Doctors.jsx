import Button from "../components/ui/Button";
import {
  Award,
  Calendar,
  Funnel,
  Search,
  Star,
  Stethoscope,
} from "lucide-react";
import {
  Card,
  CardContents,
  CardTitle,
  CardDescription,
  CardIcon,
  CardActions,
} from "../components/ui/Card";

function Doctors() {
  const stats = [
    {
      value: "50+",
      Label: "Expert Doctors",
    },
    {
      value: "15+",
      Label: "Specializations",
    },
    {
      value: "25+",
      Label: "Years of Experience",
    },
    {
      value: "98%",
      Label: "Patient Satisfaction",
    },
  ];
  const qualifications = [
    {
      icon: Award,
      qualification: "Board Certified",
      description:
        "All our doctors are board certified in their specialties with rigorous training and continous education",
    },
    {
      icon: Star,
      qualification: "Board Certified",
      description:
        "All our doctors are board certified in their specialties with rigorous training and continous education",
    },
    {
      icon: Stethoscope,
      qualification: "Board Certified",
      description:
        "All our doctors are board certified in their specialties with rigorous training and continous education",
    },
  ];
  return (
    <div>
      <section className="bg-blue-800 p-8">
        <div className="flex flex-col text-center items-center justify-center p-4">
          <h2 className="text-white text-4xl font-bold mt-6">
            Meet our Expert
            <br />
            <span className="text-blue-200">Medical Team</span>
          </h2>
          <p className="text-gray-100 text-2xl max-w-3xl my-2">
            Our board-certified physicians bring years of experience and
            expertise to provide you with highest medical care.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-24 pb-6 items-center justify-center">
          {stats.map((stat, index) => (
            <div
              className="inline text-center items-center justify-between"
              key={index}
            >
              <p className="text-blue-200 text-3xl font-bold">{stat.value}</p>
              <p className="text-gray-200">{stat.Label}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="relative w-3/4 lg:w-1/2 md:w-1/2 mt-6 text-left items-start justify-start">
          <input
            type="search"
            placeholder="search doctors by name or specialization..."
            className="text-zinc-600 w-full py-1 pl-10 pr-4 m-3 rounded-xl cursor-text border-2 border-gray-500 outline-none transition-all duration-200"
          />
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 inline" />
        </div>
        {/* <div className="flex flex-row gap-2 items-end justify-end text-right m-3 px-2">
          <Funnel className="text-gray-400 inline"/>
          <p>Specializations</p>
        </div> */}
      </section>
      <section className="bg-[#fdf0e9] p-10">
        <div className="flex flex-col items-center justify-center text-center p-8">
          <Stethoscope
            size={40}
            className="text-gray-400 items-center justify-center"
          />
          <p className="text-black mt-3">No doctors found</p>
          <p className="text-gray-600 mt-3 mb-3">
            Try adjusting your search criteria or browse all doctors
          </p>
          <Button
            className="mt-3 justify-center items-center"
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Clear Filters
          </Button>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center text-center ">
          <h2 className="text-3xl font-bold p-2 mt-6 text-center">
            Why Our Doctors Are Different
          </h2>
          <p className="text-gray-600 p-2 text-center text-lg max-w-3xl">
            Our physicians are committed to providing personalized,
            compassionate care using the latest medical advances and
            evidence-based treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-4 mx-3 items-center justify-between">
          {qualifications.map((item, index) => (
            <Card
              key={index}
              className="max-w-sm shadow-lg text-center max-h-lvh h-72"
            >
              <item.icon
                size={60}
                className="bg-blue-700 p-2 rounded-lg text-white mt-6 mx-auto"
              />
              <CardContents className="px-2 py-4">
                <CardTitle>{item.qualification}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContents>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-blue-800 p-8">
        <div className="flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl font-bold text-white">
            Schedule Your Appointment Today
          </h2>
          <p className="text-teal-50 text-lg my-3 max-w-3xl">
            Take the first step towards better health. Our experienced doctors
            are ready to provide you with personalized care you deserve.
          </p>

          <Button
            className="hover:bg-gray-300 text-blue-400"
            sx={{
              color: "blue",
              backgroundColor: "white",
              hover: { backgroundColor: "gray" },
            }}
          >
            <Calendar className="inline-block ml-2" />
            Book your consultation
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Doctors;
