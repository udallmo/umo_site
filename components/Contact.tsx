import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:udall_mo@outlook.com?subject=${formData.subject}&body=Hi my name is ${formData.name} ${formData.message}`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h3 className="uppercase mb-20 top-24 tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="space-y-10">
        <div className="flex item-center space-x-5 justify-center">
          <PhoneIcon className="text-blue-500 h-7 w-7 animate-pulse" />
          <p className="text-xl">226-246-3079</p>
        </div>
        <div className="flex item-center space-x-5 justify-center">
          <EnvelopeIcon className="text-blue-500 h-7 w-7 animate-pulse" />
          <p className="text-2xl">udall_mo@outlook.com</p>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          ></textarea>
          <button
            className="bg-blue-500 py-5 px-10 rounded-md text-white font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
