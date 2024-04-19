"use client";
import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Search from '../shared/search-component'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import SettingsTable from './settings-table';
import SettingsForm from './new-settings-form';



export default function Settings() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <div className=" container py-4">
        <div className="flex justify-between w-full border-b-2 pb-6">
            <div className="">
               <Dialog>
                <DialogTrigger>
                <Button className=''>
                    <PlusIcon />
                    New Settings
                </Button>
                </DialogTrigger>
                <DialogContent>
                    <SettingsForm />
                </DialogContent>
               </Dialog>
            </div>
        </div>
       <div className="flex justify-between w-full pt-9">
       <div className="lg:w-full md:w-full xl:w-full w-1/2 sm:w-full">
            <Search />
        </div>
        <div className="flex justify-end w-1/6" 
         onClick={toggleDropdown}>
            <Button>
                Filter
            </Button>
            {isDropdownOpen && (
               <div className="absolute p-10 ">
                 <div className="right-0 z-10 bg-slate-100 mt-2 w-40 rounded-lg shadow-lg py-2 flex flex-col absolute pt-4">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                </div>
               </div>
            )}
        </div>
       </div>
       <div className=" py-6 relative">
       <SettingsTable />
       </div>
    </div>
  )
}
