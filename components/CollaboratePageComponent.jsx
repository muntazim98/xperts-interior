'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@headlessui/react';
import { TbArrowUpRight } from 'react-icons/tb';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline';
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
    company: '',
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

    const response = await fetch('/api/send-collaboratemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
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
        phone: '',
        email: '',
        message: '',
      });
      setAgreed(false);
    } else {
      toast.error('Failed to send email. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariants}
        className="bg-[url('/image/salesteam/salesteam2.jpg')] bg-center bg-cover h-screen w-full"
      >
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className="container py-64 text-5xl text-left font-semibold  tracking-widest uppercase text-white"
        >
          Let's Be a Partner
        </motion.h1>
      </motion.div>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p initial="offscreen" whileInView="onscreen" variants={tagVariants} className="text-lg leading-8 text-gray-600">
          This Page is exclusively for Business Owners, Suppliers and Resellers:
          </motion.p>
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-xl font-semibold tracking-tight sm:text-4xl"
          >  contact our sales to partner with us
          </motion.h2>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            <div className="mt-2.5">
              <Input type="text" id="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
            </div>
            <div className="mt-2.5">
              <Input type="text" id="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input type="text" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input type="text" id="jobtitle" placeholder="Your Job Title" value={formData.jobtitle} onChange={handleChange} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input type="text" id="businessname" placeholder="Your Business Name" value={formData.businessname} onChange={handleChange} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Input type="text" id="businessaddress" placeholder="your Business Address" value={formData.businessaddress} onChange={handleChange} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <Textarea id="message" placeholder="Type Your  Proposal Here..." value={formData.message} onChange={handleChange} />
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
            <div>
              <Button type="submit" disabled={!agreed} className={classNames(
                'flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg ring-offset-2',
                agreed ? 'hover:bg-gray-800 hover:ring-2 hover:ring-gray-800' : 'bg-gray-400 cursor-not-allowed'
              )}>
                <TbArrowUpRight className="w-5 h-5 ml-2" />
                Send Your Proposal
              </Button>
            </div>
          </motion.div>
        </form>
        <motion.div initial="offscreen" whileInView="onscreen" variants={desVariants} className="flex items-center justify-center mt-16">
          <LocationMarkerIcon className="h-6 w-6 text-primary mr-2" />
          <p className="text-gray-600 text-xl dark:text-gray-200">Dubai , United Arab Emirates</p>
        </motion.div>
      </div>
    </div>
  );
}
