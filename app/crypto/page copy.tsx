"use client";
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

export default function EncryptionExample() {
  const [input, setInput] = useState("");
  const [db, setDb] = useState([]);
  const [encryptedDb, setEncryptedDb] = useState("");
  const [decryptedDb, setDecryptedDb] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  useEffect(() => {
    // Vérifie que l'on est bien côté client
    if (typeof window === "undefined") {
      console.error("CryptoJS is only available on the client side.");
    }
    handleEncrypt();
  }, []);

  //   const mydb = { a: "a1", b: "b1" };
  const mydb = [
    { a: "a1", b: "b1" },
    { a: "a2", b: "b2" },
  ];

  const handleEncrypt = () => {
    if (mydb) {
      // Conversion préalable en chaîne JSON avant encryption
      const jsonString = JSON.stringify(mydb);
      // Clé de chiffrement (à sécuriser via des variables d'environnement)
      const key = CryptoJS.enc.Utf8.parse("1234567890123456"); // Exemple : clé 128 bits
      const encrypted = CryptoJS.AES.encrypt(jsonString, key, {
        //   const encrypted = CryptoJS.AES.encrypt(input, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();
      setEncryptedDb(encrypted);
      //   setEncryptedText(encrypted);
      console.log("db", encryptedDb);
    }
  };

  const handleDecrypt = () => {
    if (encryptedText) {
      const key = CryptoJS.enc.Utf8.parse("1234567890123456"); // Même clé utilisée pour le déchiffrement
      const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
      console.log("encryptedText", encryptedText);
      console.log("decryptedText", decryptedText);
    }
  };

  return (
    <div style={{ display: "flex", height: "555px", flexDirection: "column" }}>
      <h1>CryptoJS Example in Next.js</h1>
      <div
        style={{
          display: "flex",
          height: "555px",
          flexDirection: "column",
        }}
      >
        <label htmlFor="input">Input Text:</label>
        <input
          id="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{
            margin: 22,
          }}
          onClick={handleEncrypt}
        >
          {encryptedText !== "" ? encryptedText : "Encrypt"}
        </button>
        <button onClick={handleDecrypt}>Decrypt</button>
      </div>
      {encryptedText && (
        <div>
          <h2>Encrypted Text:</h2>
          <p>{encryptedText}</p>
        </div>
      )}
      {decryptedText && (
        <div>
          <h2>Decrypted Text:</h2>
          <p>{decryptedText}</p>
        </div>
      )}
    </div>
  );
}
