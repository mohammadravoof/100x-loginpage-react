import React from 'react'
import logo1 from './assets/100.png'
import logo2 from './assets/x.svg'

function Button(props) {
  const base = "flex h-[35px] px-[24px] py-[8px] justify-center items-center self-stretch gap-[10px] rounded-[65px] shadow-[0_8px_16px_0_rgba(0,0,0,0.25)] backdrop-blur-[23.668209075927734px] font-bold";
  const variant = {
    default:"bg-neutral-50 hover:bg-neutral-200 text-neutral-1000",
    outline:"border-solid border border-stroke text-twitter-blue-default",
  };
  const disabledStyles = props.disabled ? "cursor-not-allowed disabled:bg-neutral-500" : " ";
  const classes = `${base} ${variant[props.variant]} ${disabledStyles}`;
  return(
    <button className={classes} disabled={props.disabled}>{props.text}</button>
  )
}

function MainBody() {
  return(
    <div className="flex items-center gap-[100px]">
    <div className="flex justify-center items-end g-[2px]">
      <img src={logo1} />
      <img src={logo2} />
    </div>
    <div className="flex flex-col py-0 px-7 items-start gap-10">
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-5xl font-bold text-neutral-50">Happening now</h2>
        <h3 className="text-[26px] font-bold text-neutral-50">Join today.</h3>
      </div>
      {/* <button className="flex h-[35px] px-[24px] py-[8px] justify-center items-center self-stretch gap-[10px] rounded-[65px] bg-neutral-50 hover:bg-neutral-200 disabled:bg-neutral-500 shadow-[0_8px_16px_0_rgba(0,0,0,0.25)] backdrop-blur-[23.668209075927734px]"><span className="font-bold text-neutral-1000">Create account</span></button> */}
      <Button variant="default" text="Create Account" />
      <div className="flex justify-center items-center gap-1 self-stretch">
        <div className="w-[172px] h-[1px] bg-neutral-700" />
        <div className="text-neutral-50 font-chirp">or</div>
        <div className="w-[172px] h-[1px] bg-neutral-700" />
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <p className="text-neutral-50 text-xl font-medium">Already have an account?</p>
        {/* <button className="flex h-[35px] px-[24px] py-[8px] justify-center items-center self-stretch gap-[10px] rounded-[65px] border-solid border border-stroke shadow-[0_8px_16px_0_rgba(0,0,0,0.25)] backdrop-blur-[23.668209075927734px]"><span className="font-bold text-twitter-blue-default">Sign in</span></button> */}
        <Button variant="outline" text="Sign in" />
      </div>
    </div>
  </div>
  )
}

function App() {
  return (
    <div className="inline-flex py-[236.5px] px-[161.936px] justify-center items-center bg-neutral-1000">
    <MainBody/>
</div>

  )
}

export default App