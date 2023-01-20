import ArrowRound from "./Elements/ArrowRound";
import Lines2 from "./Elements/Lines2";
import Lines from "./Elements/Lines";
import side1 from "./side1.svg";
import Image from "next/image";
import side2 from "./side2.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseConfig from "./Firebase/config";
import firebase from "firebase/app";

export default function Main() {
  const [docs, setdocs] = useState("");
  const [showModal, setShowModal] = useState(true);
  
  useEffect(() => {
    window.onclick = function (event) {
      if (event.target == document.getElementById("myModal")) {
        setShowModal(false);
      }
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  const [Email, setEmail] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    
    const db = firebase.firestore();
    const docref = db.collection("emails").doc("emails");

    if (Email === "" || Email === null) {
      toast.warn("Please fill all the fields");
      return;
    }
    else if(!Email.includes("@")){
      toast.warn("Please enter a valid email");
      return;
    }
    
    docref.set({
      emails: firebase.firestore.FieldValue.arrayUnion(Email),
    });

   toast.success("keep your eye on the inbox, your surprise is on the way");
    setEmail("");
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="md:flex flex-row hidden bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FLanding%20Page.png?alt=media&token=212d4b73-59ba-4131-8c3c-02fc082dbe20')] bg-no-repeat bg-cover w-full h-full relative">
        <Lines2
          className={"absolute top-0 left-0 w-20 lg:w-28 -translate-y-1/4"}
        />

        <div className="w-1/4 mt-10 relative h-[400px] ">
          <Image
            src={side1}
            alt="student carrer vyas"
            width={500}
            height={300}
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="flex items-center flex-col w-1/2 relative">
          <Lines
            className={
              "absolute top-0 left-full -translate-y-1/2 -translate-x-2"
            }
          />
          <h1 className="m-2 font-bold text-5xl text-center">
            One Stop Solution to all your Career & College Queries
          </h1>
          <div
            className="flex items-center my-2 bg-white h-8 w-fit rounded-3xl py-3
          px-7"
          >
            <p className="text-lg text-center font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span>
              {""} to <span className="text-blue-700"> College </span>{" "}
            </p>
          </div>
          <div className="relative">
            <ArrowRound
              className={
                "absolute top-0 left-0 -translate-x-3/4 lg:-translate-x-full translate-y-3/4 w-24 hidden lg:block"
              }
            />
            <p className="mt-6 mb-1 font-semibold text-md text-center">
              Enter your Email to get the Suprise in your Inbox
            </p>

            <div className="flex flex-row justify-center items-center">
              <input
                className="m-1 ring-2 ring-slate-400 bg-white rounded-sm
                p-2 underline-offset-1 w-80"
                onChange={handleInput}
                value={Email}
              />
              <button
                onClick={handleClick}
                className="bg-[#6776FF] w-24 h-11 text-white rounded-lg
     hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/4 mt-10 relative h-[400px]">
          <Image
            src={side2}
            alt="students carrer vyas"
            width={500}
            height={300}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden bg-[url('https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Background%2FLanding%20Page.png?alt=media&token=212d4b73-59ba-4131-8c3c-02fc082dbe20')] bg-no-repeat bg-cover w-full h-full relative">
        <div className="flex items-center flex-col w-full relative">
          <h1 className="m-2 font-bold text-4xl text-center">
            One Stop Solution to all your Career & College Queries
          </h1>
          <div className="flex items-center py-3 px-7 bg-white h-8 rounded-3xl w-fit">
            <p className="text-sm sm:text-md text-center font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span>
              {""} to <span className="text-blue-700"> College </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row  w-full">
          <div className="w-1/2 relative h-[400px]">
            <Image
              src={side1}
              alt="student carrer vyas"
              width={100}
              height={400}
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="w-1/2 relative h-[400px]">
            <Image
              src={side2}
              alt="students carrer vyas"
              width={100}
              height={400}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <div className="relative">
          <p className="m-4 font-semibold text-sm text-center">
            Enter your Email to get the Suprise in your Inbox
          </p>

          <div className="flex flex-row justify-center items-center">
            <input className="m-2 p-1 ring-2 ring-slate-400 bg-white rounded-lg" />
            <button
              className="bg-[#6776FF] w-24 text-white rounded-lg
      h-8 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            id="myModal"
          >
            <div className="relative my-6 w-4/5 md:w-1/2 h-[500px]">
              <div
                className="items-center border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-2
              h-full"
              >
                <div className="h-full w-full relative">
                  <img
                    src={
                      "https://drive.google.com/uc?id=1Fx04bpey7SqG0znOeLYmkgsez5bCiHve"
                    }
                    alt="ModalImage"
                    className="absolute top-0 left-0 w-full h-full object-contain border-2 border-blue-400 
                    rounded-md"
                  />
                </div>
                <Link href="https://sessions-careervyas.typedream.app/">
                  <p className="text-3xl font-semibold mt-5 text-[#6776FF] cursor-pointer mb-5">
                    Register Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
