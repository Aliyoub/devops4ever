"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeCategories() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#264BC0",
        height: "100%",
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
        Histoire
      </h2>
      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/history/quiz")}
        >
          Quiz
        </li>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/history")}
        >
          Question / Réponse
        </li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
        Géographie
      </h2>
      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/geography")}
        >
          Quiz
        </li>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/geography")}
        >
          Question / Réponse
        </li>
      </ul>
      <h2 style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>CKA</h2>
      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/quiz")}
        >
          Quiz
        </li>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/question-answer")}
        >
          Question / Réponse
        </li>
      </ul>

      <h2 style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
        BASH SHELL
      </h2>
      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/bash-shell/quiz")}
        >
          Quiz
        </li>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/question-answer")}
        >
          Question / Réponse
        </li>
      </ul>
      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() =>
            router.push("/revisions/cka/cluster-architecture/quiz")
          }
        >
          Cluster Architecture
        </li>

        {/* <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/question-answer")}
        >
          Question / Réponse
        </li> */}
      </ul>

      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/storage/quiz")}
        >
          Storage
        </li>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/storage/read")}
        >
          Les Volumes
        </li>

        {/* <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/question-answer")}
        >
          Question / Réponse
        </li> */}
      </ul>

      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/troubleshooting/quiz")}
        >
          Troubleshooting
        </li>

        {/* <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/question-answer")}
        >
          Question / Réponse
        </li> */}
      </ul>

      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() =>
            router.push("/revisions/cka/workloads-and-scheduling/quiz")
          }
        >
          Workloads & Scheduling
        </li>

        {/* <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/question-answer")}
        >
          Question / Réponse
        </li> */}
      </ul>

      <ul style={{ width: "100%" }}>
        <li
          className="li-style"
          onClick={() =>
            router.push("/revisions/cka/services-and-networking/quiz")
          }
        >
          Services and Networking
        </li>
        <li
          className="li-style"
          onClick={() =>
            router.push("/revisions/cka/services-and-networking/read/networking")
          }
        >
          Networking
        </li>
        <li
          className="li-style"
          onClick={() =>
            router.push("/revisions/cka/services-and-networking/read/services")
          }
        >
          Services
        </li>

        {/* <li
          className="li-style"
          onClick={() => router.push("/revisions/cka/question-answer")}
        >
          Question / Réponse
        </li> */}
      </ul>
      <style jsx>{`
        .li-style {
          padding: 10px;
          border-bottom: 0.01rem solid #fca4f0;
        }
        h2 {
          border-bottom: 0.05rem solid #fca4f0;
        }
      `}</style>
    </div>
  );
}
