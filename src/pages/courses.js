import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MushroomMimage from "../img/leenas-mushroom-img.jpg";
import EnrollFormButton from "../components/CourseEnroll/EnrollFormButton";

const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <img
          src={MushroomMimage}
          className="course-img"
          width={1000}
          height={600}
        />
        <div className="h1-container absolute">
          <h1 className="course-h1">Welcome to Leena's Mushroom</h1>
          <h5 className="course-h5">
            Kerala's largest hub for premium mushroom cultivation!
          </h5>
        </div>
      </div>

      <section className="section column is-10 is-offset-1 page-margin-b">
        <div className="content">
          <div className="course-head p-4">
            <h2 className="title color-white mb-2">
              Beginner's Mushroom Cultivation Course
            </h2>
            <p className="color-white">
              Step into the fascinating world of mushroom cultivation with our
              specially designed course for enthusiasts, hobbyists, and those
              dreaming of launching a small-scale mushroom farming business.
            </p>
          </div>

          {/* Fees and Details */}
          <div className="my-4">
            <h2>Course Details</h2>
            <p>
              This course blends <strong>essential theory</strong> with{" "}
              <strong>hands-on practical</strong> knowledge, giving you the
              confidence and skills to thrive in the mushroom industry.
            </p>
            <p>
              <strong>📅 Dates:</strong> December 15th & 16th
              <br />
              <strong>🕖 Time:</strong> 7:00 PM – 8:00 PM
              <br />
              <strong>🌐 Language:</strong> English
              <br />
              <strong>💵 Fees:</strong> ₹2500/-
              <br />
            </p>
          </div>

          <div className="my-4 mb-5">
            <p>
              Join us and turn your passion for mushrooms into a rewarding
              adventure. Let’s grow together! 🌱
            </p>

            <EnrollFormButton />
          </div>

          <hr />

          {/* What You'll Learn */}
          <div className="my-4">
            <h3>What You’ll Learn</h3>
            <ul>
              <li>
                <strong>Introduction to Mushroom Biology</strong> – Understand
                the science behind mushroom growth.
              </li>
              <li>
                <strong>Variety of Cultivable Mushrooms</strong> – Explore
                species suitable for farming.
              </li>
              <li>
                <strong>Substrate Preparation & Sterilization</strong> – Master
                techniques for creating the perfect growth medium.
              </li>
              <li>
                <strong>Environmental & Physical Requirements</strong> –
                Optimize conditions for cultivation.
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h3>What You'll Gain:</h3>
            <div>
              <div>✅ Essential knowledge about mushroom farming</div>
              <div>✅ Practical tips for growing at home</div>
              <div>
                ✅ Insights into marketing and scaling your mushroom business
              </div>
            </div>
          </div>

          <div className="my-4">
            <h3>What You’ll Get:</h3>
            <div>
              <div>
                ✅ A Mushroom Beginner Kit to kickstart your cultivation
                journey.
              </div>
              <div>
                ✅ An Official Certificate of Completion to recognize your
                newfound expertise.
              </div>
            </div>
          </div>

          {/* Course Schedule */}
          <div className="my-4">
            <h3>Course Schedule</h3>
            <h4>Day 1: Foundations of Mushroom Cultivation</h4>
            <ul>
              <li>Introduction to Mushroom Cultivation</li>
              <li>Exploring Different Types of Mushrooms</li>
              <li>Why Choose Mushrooms?</li>
              <li>Health Benefits of Mushrooms</li>
              <li>Cultivable Mushroom Varieties in India</li>
            </ul>

            <h4>Day 2: Practical Mushroom Cultivation</h4>
            <ul>
              <li>Oyster Mushroom Farming Techniques</li>
              <li>Substrate Selection for Mushroom Farming</li>
              <li>Growing Mushrooms at Home – A Step-by-Step Guide</li>
              <li>Harvesting Techniques</li>
              <li>Choosing the Right Farming Location</li>
              <li>Marketing Strategies for Mushrooms</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CoursesPage;
