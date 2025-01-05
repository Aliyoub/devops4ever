"use client";
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

export default function EncryptionExample() {
  const [encryptedDb, setEncryptedDb] = useState("");
  const [decryptedDb, setDecryptedDb] = useState([]);
  const [db, setDb] = useState([]);

  const mydb: any = [
    { a: "a1", b: "b1" },
    { a: "a2", b: "b2" },
    { a: "a3", b: "b3" },
    { a: "a4", b: "b4" },
    // { a: "a5", b: "b5" },
  ];

  useEffect(() => {
    setDb(mydb);
    handleEncrypt();
    handleDecrypt();
  }, []);

  const handleEncrypt = () => {
    if (mydb) {
      // Conversion préalable en chaîne JSON avant encryption
      const jsonString = JSON.stringify(mydb);
      // Clé de chiffrement (à sécuriser via des variables d'environnement)
      const key = CryptoJS.enc.Utf8.parse("1234567890123456"); // Exemple : clé 128 bits
      const encrypted = CryptoJS.AES.encrypt(jsonString, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();
      setEncryptedDb(encrypted);
      console.log("db encrypted", encryptedDb);
    }
  };

  const handleDecrypt = () => {
    if (encryptedDb) {
      const key = CryptoJS.enc.Utf8.parse("1234567890123456"); // Même clé utilisée pour le déchiffrement
      const decrypted = CryptoJS.AES.decrypt(encryptedDb, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
      //   On convertit le string en tableau
      const decryptedSlice = JSON.parse(decrypted);
      decryptedSlice.slice(1, 2);
      setDecryptedDb(decryptedSlice);
      console.log("db decrypted", decryptedDb);
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
        {/* <button
          style={{
            margin: 22,
          }}
          onClick={handleEncrypt}
        >
          Encrypt
        </button>
        <button onClick={handleDecrypt}>Decrypt</button> */}
        {decryptedDb.map((s: any, i: number) => (
          <div key={i}>{Object.values(s)}</div>
        ))}
      </div>
    </div>
  );
}
