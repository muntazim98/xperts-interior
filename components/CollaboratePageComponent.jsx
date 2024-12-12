'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@headlessui/react';
import { TbArrowUpRight } from 'react-icons/tb';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    jobtitle: '',
    businessname: '',
    businessaddress: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    var templateParams={
      from_name:formData.firstname + ' ' + formData.lastname,
      to_name:'Numraiz Zafar',
      from_email:formData.email,
      from_phone:formData.phone,
      from_jobtitle:formData.jobtitle,
      from_business:formData.businessname,
      from_address:formData.businessaddress,
      message : formData.message,
      reply_to:formData.email
    };
    await emailjs.send(
      'service_jorqchn', 
      'template_ma6u3qm',
      templateParams,
       '7aO6ImrRUzx5UxfBm',
      )
      .then(
        () => {
          toast.success('Email received successfully. We will get back to you soon. Thanks!', {
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
            email: '',
            phone: '',
            jobtitle: '',
            businessname: '',
            businessaddress: '',
            message: '',
          });
          setAgreed(false);
        },
        (error) => {
         
          toast.error('Failed to send email. Please try again later.', {
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
    <div className="relative overflow-hidden">
      <ToastContainer />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariants}
        className="bg-[url('/image/salesteam/salesteam2.webp')] bg-center bg-cover h-screen w-full flex items-center justify-center"
      >
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className="text-center text-4xl mt-12 sm:mt-14 xl:mt-24 lg:mt-20 md:mt-16 py-14 sm:py-14 xl:py-32 lg:py-32 md:py-24 rounded-lg shadow-lg sm:text-5xl md:text-6xl font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-black via-transparent to-black"
        >
          Let's Be a Partner
        </motion.h1>
      </motion.div>
      <div className="bg-gray-50 dark:bg-gray-900 px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p initial="offscreen" whileInView="onscreen" variants={tagVariants} className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            This Page is exclusively for Business Owners, Suppliers, and Resellers:
          </motion.p>
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-4"
          >
            Contact our sales to partner with us
          </motion.h2>
        </div>
        <form className="mx-auto mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <div className="mt-2.5">
              <Input type="text" id="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
            </div>
            <div className="mt-2.5">
              <Input type="text" id="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <Input type="text" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <Input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <Input type="text" id="jobtitle" placeholder="Your Job Title" value={formData.jobtitle} onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <Input type="text" id="businessname" placeholder="Your Business Name" value={formData.businessname} onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <Input type="text" id="businessaddress" placeholder="Business Address" value={formData.businessaddress} onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <Textarea id="message" placeholder="Type Your Proposal Here..." value={formData.message} onChange={handleChange} />
            </div>
            <Switch.Group as="div" className="sm:col-span-2">
              <div>
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-primary' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out'
                  )}
                >
                  <span className="sr-only">Agree to our policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                I agree to the{' '}
                <a href="#" className="font-semibold text-primary">
                  Privacy&nbsp;Policy
                </a>
              </Switch.Label>
            </Switch.Group>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={!agreed}
                className={classNames(
                  'w-full py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-colors duration-300 ease-in-out',
                  agreed ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-400 cursor-not-allowed'
                )}
              >
                <TbArrowUpRight className="w-5 h-5 ml-2" />
                Send Your Proposal
              </Button>
            </div>
          </motion.div>
        </form>
        <motion.div initial="offscreen" whileInView="onscreen" variants={desVariants} className="flex items-center justify-center mt-16">
          <LocationMarkerIcon className="h-6 w-6 text-primary mr-2" />
          <a 
              href="https://www.google.com/maps/place/25%C2%B016'28.0%22N+55%C2%B020'51.9%22E/@25.2744427,55.3451653,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.2744427!4d55.3477402?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D" 
               target="_blank" 
                  rel="noopener noreferrer" 
                     className="text-xl text-gray-800 dark:text-gray-200 hover:underline"
                            >
                     XpertsInteriorDecoration, Dubai
                             </a>
        </motion.div>
      </div>

      {/* Additional Section - Map Integration */}
      <div className="px-6 py-12 sm:py-16 lg:px-8 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Our Location</h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
            Find us at our main office in Dubai for in-person meetings or consultations.
          </p>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.341584576255!2d55.27083041538284!3d25.27698798383085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6824c33b3e9b%3A0x6f3e7c66e9b5b4!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1630999112562!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 sm:h-80 md:h-96 lg:h-80 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
