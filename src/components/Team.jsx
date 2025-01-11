import React from "react";

function Team() {
  const team = [
    {
      img: "./teamMember1.jpg",
      name: "John Smith",
      designation: "Engineer",
      statement:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      img: "./teamMember2.jpg",
      name: "Elina Williams",
      designation: "Data Analyst",
      statement:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      img: "./teamMember3.jpg",
      name: "John Smith",
      designation: "Product Manager",
      statement:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];

  return (
    <div className="text-gray text-sm bg-white p-4 rounded-md font-normal">
      <h2 className="text-black text-xl font-medium mb-4">Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      {team.map((member, index) => {
        return (
          <div
            className="md:flex justify-center items-center space-x-4 p-2 rounded-md bg-[#e8f4fd] my-3 py-6 md:py-2"
            key={index}
          >
            <div className="text-center flex flex-col justify-center items-center">
              <img src={member.img} alt="Team member" className="rounded-md w-[150px] md:w-[250px] h-[100px] object-cover" />
              <h6 className="text-black font-medium">{member.name}</h6>
              <p className="text-gray-600 font-medium">{member.designation}</p>
            </div>
            <p>{member.statement}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
