"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export const PostForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { name, email, message }
      const result =await fetch("/api/post", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ body }),
      });

      console.log(result);
      router.push("/welcome");
      return result;


    } catch (error) {
      console.error(`Error submitting the form`, error);
    }
  }
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={ e => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={ e => setEmail(e.target.value)}
            type="email"
            placeholder="abc@example.comf"/>
        </div>
        <div>
          <label htmlFor="inquiry">Message</label>
          <textarea 
            value={message}
            onChange={ e => setMessage(e.target.value)}
            placeholder="Message">
          </textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
   )
  }
