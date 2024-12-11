'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@headlessui/react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const templateParams={
    from_name:formData.email,
    to_name:'Muntazim Ali',
    message : formData.message

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await emailjs.send(
    'service_csihxee', 
    'template_5wcn3uj', 
      templateParams,
       'Z7mnTwmbhhWTedURM',
    )
    .then(
      () => {
        toast.success('Query received successfully. We will get back to you soon. Thanks!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          message: '',
        });
        setAgreed(false);
      },
      (error) => {
        console.error(error);
        toast.error('Failed to send query. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
    );
};
   

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />

      {/* Hero Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariants}
        className="relative h-screen bg-[url('/image/salesteam/salesteam.webp')] bg-center bg-cover w-full"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="container text-5xl font-bold tracking-widest uppercase text-white"
          >
            Let's Connect
          </motion.h1>
          {/* Scroll Down Indicator */}
          <div className="mt-8">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white text-2xl"
            >
              ↓
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Information Section */}
      <div className="px-6 py-12 sm:py-16 lg:px-8 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            We're here to answer your questions and help you with our services.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <PhoneIcon className="h-8 w-8 text-primary mb-2" />
              <p className="text-xl text-gray-800 dark:text-gray-200">+123-456-7890</p>
              <p className="text-gray-600 dark:text-gray-400">Mon - Fri, 8am - 6pm</p>
            </div>
            <div className="flex flex-col items-center">
              <MailIcon className="h-8 w-8 text-primary mb-2" />
              <p className="text-xl text-gray-800 dark:text-gray-200">xpertsinteriors@gmail.com</p>
              <p className="text-gray-600 dark:text-gray-400">Support 24/7</p>
            </div>
            <div className="flex flex-col items-center">
              <LocationMarkerIcon className="h-8 w-8 text-primary mb-2" />
              <p className="text-xl text-gray-800 dark:text-gray-200">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-6 py-24 sm:py-32 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="text-lg leading-8 text-gray-700 dark:text-gray-300"
          >
            This page is exclusively for fit-out enquiry service purposes:
          </motion.p>
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-2xl mt-4 font-semibold tracking-tight sm:text-4xl text-gray-900 dark:text-white"
          >
            Please feel free to ask anything
          </motion.h2>
        </div>

        <form className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            {/* Input Fields */}
            <div className="mt-2.5">
              <Input
                type="text"
                id="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
              />
            </div>
            <div className="mt-2.5">
              <Input
                type="text"
                id="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
              />
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Textarea
                  id="message"
                  placeholder="Type Your Query Here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
                />
              </div>
            </div>
            <Switch.Group as="div">
              <div>
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-primary' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  )}
                >
                  <span className="sr-only">Agree to our policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label as="span" className="ml-3 text-sm">
                <span className="font-medium text-gray-900 dark:text-white">I agree to our privacy policy.</span>
              </Switch.Label>
            </Switch.Group>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={!agreed}
                className="w-full py-3 text-lg font-semibold text-white bg-primary hover:bg-primary-dark transition-colors duration-300 ease-in-out"
              >
                Send Message
              </Button>
            </div>
          </motion.div>
        </form>
      </div>

      {/* Additional Section - Map Integration */}
      <div className="px-6 py-12 sm:py-16 lg:px-8 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Our Location</h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            Find us at our main office for in-person meetings or consultations.
          </p>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.341584576646!2d55.28875891510788!3d25.27698758389619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434fef5797ef%3A0x858bdf0f2b0126!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1663889603357!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Additional Section - FAQ */}
      <div className="px-6 py-12 sm:py-16 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What services do you offer?</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We offer a wide range of fit-out services including office design, conference room setups, and industrial renovations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How can I get a quote?</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Simply fill out the contact form above, and our team will get in touch with you to provide a personalized quote based on your needs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What is your response time?</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We strive to respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
