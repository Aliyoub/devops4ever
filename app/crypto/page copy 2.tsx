"use client";
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

export default function EncryptionExample() {
  const [encryptedDb, setEncryptedDb] = useState("");
  const [decryptedDb, setDecryptedDb] = useState([]);

  const mydb = [
    { a: "a1", b: "b1" },
    { a: "a2", b: "b2" },
    { a: "a3", b: "b3" },
    { a: "a4", b: "b4" },
  ];

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
      setDecryptedDb(JSON.parse(decrypted));
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
        <button
          style={{
            margin: 22,
          }}
          onClick={handleEncrypt}
        >
          Encrypt
        </button>
        <button onClick={handleDecrypt}>Decrypt</button>
        {console.log("decryptedDb.pop()", decryptedDb[1])}
      </div>
    </div>
  );
}
