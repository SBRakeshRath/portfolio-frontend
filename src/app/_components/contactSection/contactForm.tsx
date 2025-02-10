"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handelFormSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("/api/contactFormSubmit", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();

      if (response.ok) {
        toast.success("I will get back to you soon.");
        return;
      }
      // message = array

      if (typeof res.message === "object") {
        res.message.issues.forEach((issue: { message: any }) => {
          toast.error(issue.message);
        });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="contactForm" onSubmit={handelFormSubmit}>
      <input type="text" name="name" id="name" placeholder="Enter Name" />
      <input type="email" name="email" id="email" placeholder="Enter Email" />
      <input
        type="number"
        name="number"
        id="number"
        placeholder="Enter Number"
      />
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Enter Subject"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Enter Message"
        // 4 row visible
        rows={4}
      ></textarea>
      {loading ? (
        <button>
          <Image
            src="https://img.icons8.com/material-outlined/24/spinner-frame-5.png"
            width={12}
            height={12}
            alt="loading"
          />
        </button>
      ) : (
        <input type="submit" value="send" />
      )}
      <Toaster position="top-left" reverseOrder={false} />
    </form>
  );
}
