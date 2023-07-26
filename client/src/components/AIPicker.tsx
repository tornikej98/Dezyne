const AIPicker = ({ AIPromt, setAIPromt, generateImage, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        placeholder='Type a design...'
        rows={5}
        value={AIPromt}
        onChange={(e) => {
          setAIPromt(e.target.value);
        }}
      />
      <div className='flex flex-wrap gap-3'>
        {generateImage ? (
          <button className='px-2 py-1.5 flex-1 text-[#fff] bg-[#EFBD48] rounded-md'>
            Loading...
          </button>
        ) : (
          <>
            <button
              className='px-2 py-1.5 flex-1 text-[#fff] bg-[#EFBD48] rounded-md'
              onClick={() => {
                handleSubmit('logo');
              }}
            >
              AI Logo
            </button>
            <button
              className='px-2 py-1.5 flex-1 text-[#fff] bg-[#EFBD48] rounded-md'
              onClick={() => {
                handleSubmit('full');
              }}
            >
              AI Design
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
