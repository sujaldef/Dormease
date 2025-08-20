import { motion } from "framer-motion";

const HelpPage = () => {
  const topics = [
    { img: "faq.jpg", title: "FAQs", desc: "Find answers to common questions.", btnText: "View FAQs" },
    { img: "contactsup.jpg", title: "Contact Support", desc: "Need help? Reach out to us.", btnText: "Chat Now" },
    { img: "report.jpg", title: "Report an Issue", desc: "Facing an issue? Let us know.", btnText: "Report Now" },
    { img: "userguide.jpg", title: "User Guides", desc: "Learn how to use DormEase with us.", btnText: "View Guides" },
  ];

  return (
    <div className="flex flex-col w-screen mt-[5%] items-center text-white justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Help & Support</h1>
      
      {/* Bubble Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-6 mt-10 m-15">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="relative w-[80%] h-[59vh] m-10 rounded-full shadow-lg cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {/* Upper Half with Image */}
            <div 
              className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${topic.img})` }}
            />
            
            {/* Lower Half with Content */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#12323a] flex flex-col items-center p-4 text-center">
              <h2 className="text-3xl font-semibold">{topic.title}</h2>
              <p className="text-1xl">{topic.desc}</p>
              <button className="mt-2 bg-[#0f292f] text-white px-3 py-1 text-sm rounded">
                {topic.btnText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;
