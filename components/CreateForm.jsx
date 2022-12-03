import {
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import DAO from "./DAO";

const BreadCrumb = (props) => {
  const { setActiveTab } = props;
  const tabItems = ["Create Yo Crew", "Appoint Captain"];
  return (
    <nav classNameName="flex justify-start items-center" aria-label="Breadcrumb">
      <ol className="inline-flex justify-start items-center space-x-1 md:space-x-3">
        {tabItems.map((item, index) => {
          return (
            <li key={index} className="flex ">
              <div className="flex justify-evenly items-center">
                <h1 className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white " onClick={() => setActiveTab(index)}>
                  {item}
                </h1>
                <FontAwesomeIcon icon={faAngleRight} size="2x" className="h-5 w-5" />
              </div>
            </li>
          );
        })}
        <li className="inline-flex justify-start items-center">
          <h1 href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" onClick={() => setActiveTab(tabItems.length)}>
            Ahoy Sailors !
          </h1>
        </li>
      </ol>
    </nav>
  )
}

const CrewDesc = (props) => {
  const { activeTab, name, setName, desc, setDesc, address, setAddress, setIsCrewCreated } = props;
  return (
    <div className='w-full h-full flex flex-col justify-evenly items-center'>
      <div className='w-full h-full flex flex-col justify-evenly items-start gap-10'>
        {activeTab === 0 && (
          <div className='w-full h-full flex flex-col justify-start items-start gap-3'>
            <h1 className="text-2xl text-white">Name Yo Crew</h1>
            <p>What do you wanna name yo Crew?</p>
            <div className="user-box w-full md:w-1/3">
              <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-tertiary border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-tertiary"></span>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-8 rounded text-black relative"
                  required
                  onInput={(e) => setName(e.target.value)}
                  value={name}
                ></input>
                <label className="px-5">{"Crew Name *"}</label>
              </div>
            </div>
            <h1 className="text-2xl text-white">Set a cool new description for yo crew</h1>
            <p>What do you want your awesome crew to be commemorated by? <br />(Could be a fearsome motto or just some silly, sarcastic quips)</p>
            <div className="user-box w-full md:w-1/3">
              <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-tertiary border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-tertiary"></span>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-8 rounded text-black relative"
                  required
                  onInput={(e) => setDesc(e.target.value)}
                  value={desc}
                ></input>
                <label className="px-5">{"Crew Description *"}</label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className='w-full h-full flex flex-col justify-start items-start gap-5'>
            <h1 className="text-2xl text-white">Add Crew Captain's Address</h1>
            <p>This address will be treated as the crew's admin and can NOT be changed later</p>
            <div className="user-box w-full md:w-1/3">
              <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-tertiary border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-tertiary"></span>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-8 rounded text-black relative"
                  required
                  onInput={(e) => setAddress(e.target.value)}
                  value={address}
                ></input>
                <label className="px-5">{"Address *"}</label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className='w-full h-full flex flex-col justify-start items-start gap-5'>
            <h1 className="text-2xl text-white">Your Awesome Crew's Name</h1>
            <div className="user-box w-full md:w-1/3">
              <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-tertiary border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-tertiary"></span>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-8 rounded text-black relative"
                  value={name}
                  disabled
                ></input>
              </div>
            </div>
            <h1 className="text-2xl text-white">Crew's Vision/Motto/Description</h1>
            <div className="user-box w-full md:w-1/3">
              <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-tertiary border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-tertiary"></span>
                <textarea
                  type="text"
                  name="user_name"
                  className="w-full px-8 rounded text-black relative"
                  disabled
                >{desc}</textarea>
              </div>
            </div>
            <h1 className="text-2xl text-white">Crew's Captain</h1>
            <div className='w-full h-full flex flex-col sm:flex-row justify-evenly items-center'>
              <div className="user-box w-full md:w-1/3">
                <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                  <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-tertiary border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-tertiary"></span>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-8 rounded text-black relative"
                    value={address}
                    disabled
                  ></input>
                </div>
              </div>
              <div className='w-full h-full flex flex-col sm:flex-row justify-end items-center'>
                <div className="relative inline-block px-4 py-2 font-medium group w-full sm:w-96">
                  <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-tertiary border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-lg inset-0 w-full h-full bg-secondary border-2 border-black group-hover:bg-tertiary"></span>
                  <button 
                  className="relative text-black text-xl font-semibold" 
                  onClick={()=>setIsCrewCreated(true)}>Brace Yo'selves!</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const CreateForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [isCrewCreated, setIsCrewCreated] = useState(false);
  return (
    <div className='w-screen h-screen flex justify-center items-start'>
      <div className='w-10/12 h-10/12 flex justify-evenly items-center bg-black/40 rounded-xl text-white border border-secondary/40 hover:border-secondary/70'>
        {!isCrewCreated ?
          (<div id="form" className='w-full h-full flex flex-col justify-evenly items-center p-5'>
            <h1 className="text-5xl font-semibold text-white font-raleway">
              Create yo DataDAO with CrewS with a few Clicks
            </h1>
            <div className='w-full h-full flex flex-col justify-start items-start p-10 gap-10'>
              <BreadCrumb setActiveTab={setActiveTab} activeTab={activeTab} />
              <CrewDesc activeTab={activeTab} name={name} setName={setName} desc={desc} setDesc={setDesc} address={address} setAddress={setAddress} setIsCrewCreated={setIsCrewCreated}/>
            </div>
          </div>) :
          <DAO/>
        }
      </div>
    </div>
  )
}

export default CreateForm