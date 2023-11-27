"use client"

import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react"

export const PostForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const responseData = await res.json();

      return responseData

    } catch (error) {
      console.error(`Error submitting the form`, error);
    }
  }
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">お名前</label>
          <input
            value={name}
            onChange={ e => setName(e.target.value)}
            type="text"
            placeholder="山田　花子"
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            value={email}
            onChange={ e => setEmail(e.target.value)}
            type="email"
            placeholder="abc@example.comf"/>
        </div>
        <div>
          <label htmlFor="inquiry">お問い合わせ内容</label>
          <textarea 
            value={message}
            onChange={ e => setMessage(e.target.value)}
            placeholder="ここに本文を入力">
          </textarea>
        </div>
        <Link href="/welcome">
          <button type="submit">送信</button>
        </Link>
      </form>
    </>
   )
  }
