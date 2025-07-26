// import FlatPickr from "react-flatpickr";
// import "flatpickr/dist/themes/dark.css";
// import { useRef, useState } from "react";
// import { errorMsg, successMsg } from "../../../utils";
// import TaskInput from "../../../hooks/Task-Inp-Hook";

// export default function TodayDate({ date, getDate, getDateForB }) {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const calenderRef = useRef(null);

//   const { handleSubmit } = TaskInput(date);

//   const handleDateChange = ([picked]) => {
//     if (!picked) return;

//     const day = picked.toLocaleDateString("en-IN", { weekday: "long" });
//     const date = picked.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//     const time = picked.toLocaleTimeString("en-IN", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });

//     setSelectedDate(picked);
//     const value = {date,time,day}
//     getDate(value)
//   };

//   const handleDateSubmit = () => {
//     if(date.date === null) {
//       return errorMsg("Enter your Date first")
//     }
//   }

//   return (
//     <div id="date">
//       <div className="val">
//         <img
//           width="50"
//           height="50"
//           src="https://img.icons8.com/ios-filled/70/FAB005/calendar--v1.png"
//           alt="calendar--v1"
//         />
//         {date.date === null ? <p>Enter your date</p> : <p>{date.date}</p>}
//       </div>
//       <div className="input">
//         <FlatPickr
//           ref={calenderRef}
//           value={selectedDate ? [selectedDate] : []}
//           onChange={(e) => handleDateChange(e)}
//           options={{
//             dateFormat: "Y-m-d",
//             enableTime: true,
//             position: "auto center",
//           }}
//           className="custom-date-input date"
//           placeholder="Pick a date"
//           style={{
//             position: "absolute",
//             right: "13rem",
//             width: "50px",
//             opacity: 0,
//             pointerEvents: "none",
//           }}
//         />

//         <button onClick={() => handleDateSubmit()}>submit</button>
        
//         <button
//           style={{
//             height: "65px",
//             border: "4px solid white",
//             borderRadius: "50%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "0.2rem 0.3rem",
//             marginRight: "11.5rem",
//             marginTop: "0.7rem",
//           }}
//         >
//           <img
//             width="48"
//             height="48"
//             src="https://img.icons8.com/fluency-systems-regular/48/add--v1.png"
//             alt="add--v1"
//             onClick={() => {
//               if (calenderRef.current && calenderRef.current.flatpickr) {
//                 calenderRef.current.flatpickr.open();
//               }
//             }}
//           />
//         </button>
//       </div>
//     </div>
//   );
// }
