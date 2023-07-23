// import React from 'react';
// import state from '../store';
// import { useSnapshot } from 'valtio';

// const CustomButton = (props: {
//   title: string;
//   type: string;
//   customStyles: string;
//   handleClick: () => boolean;
// }) => {
//   const snap = useSnapshot(state);

//   const generateStyle = (type: string) => {
//     if (type === 'filled') {
//       return {
//         backgroundColor: snap.color,
//         // color: '#fff',
//       };
//     }
//   };

//   return (
//     <button
//       className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyles}`}
//       style={generateStyle(props.type)}
//     >
//       {props.title}
//     </button>
//   );
// };

// export default CustomButton;
