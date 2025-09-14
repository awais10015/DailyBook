"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CirclePlus,
  Funnel,
  Search,
  Ellipsis,
  Pencil,
  Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Supplier = () => {
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [position, setPosition] = React.useState("bottom");
  const [search, setSearch] = useState("");

  const dummyData = [
    {
      name: "Leon Scott",
      email: "peter71@sandoval.net",
      phoneNumber: "(312)161-5209x41648",
      city: "Mannport",
    },
    {
      name: "Emily Parrish",
      email: "jacqueline97@taylor.org",
      phoneNumber: "943-572-0225x0620",
      city: "Benjaminburgh",
    },
    {
      name: "Debbie Parsons",
      email: "william81@pope.com",
      phoneNumber: "001-820-577-5539",
      city: "Ericbury",
    },
    {
      name: "Helen Johnson",
      email: "dorisgonzalez@yahoo.com",
      phoneNumber: "001-774-474-1426x56422",
      city: "West Thomasland",
    },
    {
      name: "Joel Taylor",
      email: "courtney84@wilkins.info",
      phoneNumber: "+1-891-473-3323x9696",
      city: "Beckborough",
    },
    {
      name: "Angela White",
      email: "cristina33@jenkins.biz",
      phoneNumber: "187-930-6487",
      city: "Port Jason",
    },
    {
      name: "Thomas Morales",
      email: "rossperry@hotmail.com",
      phoneNumber: "888-693-8016",
      city: "Lauraborough",
    },
    {
      name: "Melissa Gomez",
      email: "ryanbrown@gmail.com",
      phoneNumber: "814-556-2042",
      city: "New Jacobfurt",
    },
    {
      name: "Daniel Garcia",
      email: "jesus76@hudson.org",
      phoneNumber: "(232)667-9552",
      city: "North Lisaport",
    },
    {
      name: "Cynthia Hall",
      email: "davidsonkaren@hotmail.com",
      phoneNumber: "+1-224-870-1610",
      city: "South Markside",
    },
    {
      name: "Jerry Burns",
      email: "ortegapaul@wood.biz",
      phoneNumber: "(237)813-5529",
      city: "Hughesport",
    },
    {
      name: "Patricia Cox",
      email: "phillipsmark@yahoo.com",
      phoneNumber: "380-482-7930",
      city: "Port Michelleside",
    },
    {
      name: "Benjamin Stewart",
      email: "gordonjose@hotmail.com",
      phoneNumber: "001-671-998-0709x96553",
      city: "East Michaelmouth",
    },
    {
      name: "Victoria Hughes",
      email: "gonzalezgloria@hotmail.com",
      phoneNumber: "772-277-4489x715",
      city: "West Jack",
    },
    {
      name: "Anthony Jenkins",
      email: "martineztina@hotmail.com",
      phoneNumber: "001-305-478-0138",
      city: "Tiffanyhaven",
    },
    {
      name: "Catherine Wells",
      email: "marshjeffrey@armstrong.com",
      phoneNumber: "(793)473-9067",
      city: "West Cherylborough",
    },
    {
      name: "Samuel Gonzales",
      email: "cabreramaria@hotmail.com",
      phoneNumber: "+1-384-669-3101",
      city: "Smithland",
    },
    {
      name: "Nicole Lopez",
      email: "rodriguezrachel@clark.biz",
      phoneNumber: "270-847-4350x657",
      city: "New Timothy",
    },
    {
      name: "George Price",
      email: "rodriguezjose@martinez.org",
      phoneNumber: "001-259-786-5055x455",
      city: "Wilsonmouth",
    },
    {
      name: "Laura Turner",
      email: "melissamorris@yahoo.com",
      phoneNumber: "+1-362-252-4646",
      city: "Mcdonaldstad",
    },
    {
      name: "Philip Rogers",
      email: "brittany94@wilson.com",
      phoneNumber: "458-423-9676",
      city: "Jenniferton",
    },
    {
      name: "Christine Griffin",
      email: "calvinspencer@yahoo.com",
      phoneNumber: "001-812-404-7789x07800",
      city: "Codymouth",
    },
    {
      name: "Jose Carter",
      email: "stephenmoore@gmail.com",
      phoneNumber: "213-435-2017",
      city: "Edwardland",
    },
    {
      name: "Maria James",
      email: "craigmiller@hotmail.com",
      phoneNumber: "001-737-982-2215x413",
      city: "New Matthew",
    },
    {
      name: "Henry Hernandez",
      email: "nicholas77@harper.com",
      phoneNumber: "(897)561-2087",
      city: "East Whitney",
    },
    {
      name: "Sharon Reed",
      email: "brett39@pena.biz",
      phoneNumber: "756.714.1983",
      city: "Karenview",
    },
    {
      name: "Jonathan Russell",
      email: "timothy84@lowe.org",
      phoneNumber: "001-353-407-5112",
      city: "South Crystalton",
    },
    {
      name: "Ashley Bell",
      email: "allison16@donovan.org",
      phoneNumber: "506.469.6979",
      city: "West Trevorland",
    },
    {
      name: "Christopher Evans",
      email: "daniel11@brown.com",
      phoneNumber: "(530)578-2894x37625",
      city: "North Theresa",
    },
    {
      name: "Barbara Diaz",
      email: "debra64@white.biz",
      phoneNumber: "001-940-312-5864",
      city: "Lake Brandy",
    },
    {
      name: "Robert Thomas",
      email: "qclark@roberts.com",
      phoneNumber: "(915)506-3271",
      city: "New Danielshire",
    },
    {
      name: "Jennifer Howard",
      email: "sherry12@wood.com",
      phoneNumber: "763-421-0991",
      city: "Robertville",
    },
    {
      name: "Adam Martinez",
      email: "erik33@watkins.biz",
      phoneNumber: "001-299-783-1192x87065",
      city: "North Matthewport",
    },
    {
      name: "Angela Stewart",
      email: "karen23@jenkins.com",
      phoneNumber: "+1-739-236-0090",
      city: "Port Kristenmouth",
    },
    {
      name: "James White",
      email: "julia78@wilson.org",
      phoneNumber: "(492)616-1115",
      city: "Lake Scott",
    },
    {
      name: "Ethan Parker",
      email: "chavezrachel@yahoo.com",
      phoneNumber: "001-765-603-0675",
      city: "North Madisonburgh",
    },
    {
      name: "Stephanie Coleman",
      email: "osborneangela@hotmail.com",
      phoneNumber: "856-904-3876",
      city: "East Christopher",
    },
    {
      name: "Andrew Cooper",
      email: "davidlowe@hotmail.com",
      phoneNumber: "627.619.1235",
      city: "Sellersview",
    },
    {
      name: "Rachel Ward",
      email: "dlewis@holland.com",
      phoneNumber: "208.997.1137x4015",
      city: "Jonesfurt",
    },
    {
      name: "William Gonzalez",
      email: "steven90@gmail.com",
      phoneNumber: "(729)843-8321",
      city: "Lake Douglas",
    },
    {
      name: "Sandra Hayes",
      email: "isaacarmstrong@yahoo.com",
      phoneNumber: "410-759-1340",
      city: "Lake Joseph",
    },
    {
      name: "Edward Martinez",
      email: "goodmandiana@hotmail.com",
      phoneNumber: "+1-518-695-1967",
      city: "South Robert",
    },
    {
      name: "Sophia Scott",
      email: "harrisdavid@yahoo.com",
      phoneNumber: "888.331.6653x579",
      city: "Moorebury",
    },
    {
      name: "Alexander Ross",
      email: "tonyanderson@gmail.com",
      phoneNumber: "001-318-469-2587",
      city: "Lake Sarah",
    },
    {
      name: "Donna Gray",
      email: "markfoster@hotmail.com",
      phoneNumber: "428-443-2060x711",
      city: "South Scottstad",
    },
    {
      name: "Christopher Peterson",
      email: "sheltonryan@yahoo.com",
      phoneNumber: "728-676-6363",
      city: "New Jaredfort",
    },
    {
      name: "Megan Powell",
      email: "alexander28@barnes.com",
      phoneNumber: "+1-272-315-1224",
      city: "Thomasstad",
    },
    {
      name: "Patrick Adams",
      email: "lindseymichelle@hotmail.com",
      phoneNumber: "001-523-258-3198",
      city: "West Jared",
    },
    {
      name: "Hannah James",
      email: "williamscatherine@yahoo.com",
      phoneNumber: "+1-377-671-9014",
      city: "Hickmanchester",
    },
    {
      name: "Matthew Morgan",
      email: "jonathon86@jimenez.biz",
      phoneNumber: "(953)585-2758",
      city: "East Jacobstad",
    },
    {
      name: "Joseph Ramirez",
      email: "elliottpaul@meza.net",
      phoneNumber: "954.322.9879x479",
      city: "Michaelfurt",
    },
    {
      name: "Kayla Sanchez",
      email: "robinsonmichael@gmail.com",
      phoneNumber: "535-669-4124",
      city: "East Heatherland",
    },
    {
      name: "Joshua Alexander",
      email: "patricia45@tran.org",
      phoneNumber: "001-435-224-5363",
      city: "Gainesbury",
    },
    {
      name: "Madison Brooks",
      email: "nicholas57@rodriguez.biz",
      phoneNumber: "978-883-1784",
      city: "South Alexville",
    },
    {
      name: "Kevin Edwards",
      email: "villarrealmegan@hotmail.com",
      phoneNumber: "(409)358-6104",
      city: "Youngchester",
    },
    {
      name: "Olivia Perry",
      email: "angela10@hotmail.com",
      phoneNumber: "697-745-2326",
      city: "Lake Sharonland",
    },
    {
      name: "Michael Murphy",
      email: "morrisjeremiah@yahoo.com",
      phoneNumber: "595-848-6217",
      city: "Heatherbury",
    },
    {
      name: "David Kelly",
      email: "thomasjoshua@hotmail.com",
      phoneNumber: "904.884.0448",
      city: "Lake Joshuaview",
    },
    {
      name: "Sophia Butler",
      email: "sgarcia@hunter.com",
      phoneNumber: "866.798.4271",
      city: "West Andre",
    },
    {
      name: "Brian Richardson",
      email: "kelsey10@smith.org",
      phoneNumber: "(624)768-5626",
      city: "North Victor",
    },
    {
      name: "Megan Price",
      email: "raymondcollins@yahoo.com",
      phoneNumber: "001-744-277-2740",
      city: "North Jasonfurt",
    },
    {
      name: "Evelyn Martinez",
      email: "xcarpenter@wallace.org",
      phoneNumber: "001-938-631-3629",
      city: "Lake Vanessa",
    },
    {
      name: "Brian Jenkins",
      email: "hodgethomas@yahoo.com",
      phoneNumber: "925-535-5698",
      city: "Lake Timothyfurt",
    },
    {
      name: "Victoria Mitchell",
      email: "bryan88@boyd.biz",
      phoneNumber: "374.620.1122",
      city: "Derrickshire",
    },
    {
      name: "Ryan Ramirez",
      email: "edwardsjacob@hotmail.com",
      phoneNumber: "884.295.3701",
      city: "Port Christinachester",
    },
    {
      name: "Melissa Simmons",
      email: "wcruz@williams.net",
      phoneNumber: "(883)512-9652x2851",
      city: "Christopherton",
    },
    {
      name: "Joshua Torres",
      email: "perezcory@hotmail.com",
      phoneNumber: "313.653.7958x468",
      city: "East Peterfort",
    },
    {
      name: "Grace Johnson",
      email: "tammy47@warren.biz",
      phoneNumber: "340-993-6464",
      city: "East Emilybury",
    },
    {
      name: "Justin Green",
      email: "arnoldmelissa@barnett.org",
      phoneNumber: "(687)493-6639",
      city: "Port Marymouth",
    },
    {
      name: "Amanda Martinez",
      email: "carrollcharles@yahoo.com",
      phoneNumber: "309-903-1815",
      city: "Heidiville",
    },
    {
      name: "Mark Robinson",
      email: "zthompson@scott.com",
      phoneNumber: "349-277-0161",
      city: "East Kellyside",
    },
    {
      name: "Jessica Watson",
      email: "ashley46@greer.com",
      phoneNumber: "001-321-760-5698",
      city: "West Krystalstad",
    },
    {
      name: "Paul Anderson",
      email: "griffithkristina@stone.com",
      phoneNumber: "001-447-208-2522x351",
      city: "West Dawn",
    },
    {
      name: "Rebecca James",
      email: "rmartinez@yahoo.com",
      phoneNumber: "700.731.7890x5095",
      city: "South Victor",
    },
    {
      name: "Charles Stewart",
      email: "bwright@hotmail.com",
      phoneNumber: "001-748-889-4256",
      city: "New Danielside",
    },
    {
      name: "Anthony Foster",
      email: "jameshernandez@hotmail.com",
      phoneNumber: "+1-827-345-2830",
      city: "Johnsonborough",
    },
    {
      name: "Jennifer Young",
      email: "stephen76@smith.biz",
      phoneNumber: "(523)656-7457",
      city: "New Amberfurt",
    },
    {
      name: "Stephanie White",
      email: "kennethboyd@gmail.com",
      phoneNumber: "515-956-7190",
      city: "North Brentchester",
    },
    {
      name: "Jason Hernandez",
      email: "longaustin@hotmail.com",
      phoneNumber: "+1-943-804-7334",
      city: "New Richardshire",
    },
    {
      name: "Natalie Ward",
      email: "lawrencemelissa@hotmail.com",
      phoneNumber: "001-368-272-1697",
      city: "Jeffreyfurt",
    },
  ];

  const [data, setData] = useState(dummyData);

  useEffect(() => {
    setData(
      dummyData.filter((supplier) =>
        supplier.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = data.slice(startIndex, endIndex);

  const toggleSelect = (user) => {
    setSelected((prev) =>
      prev.includes(user)
        ? prev.filter((n) => n.name !== user.name)
        : [...prev, user]
    );
  };

  const handleDeselect = () => {
    setSelected([]);
  };

  const onDelete = (user, selectedUsers = []) => {
    if (user) {
      // delete single user
      setData((prev) => prev.filter((e) => e.name !== user.name));
      setSelected((prev) => prev.filter((u) => u.name !== user.name));
    } else if (selectedUsers.length > 0) {
      // delete all selected
      const namesToDelete = new Set(selectedUsers.map((u) => u.name));
      setData((prev) => prev.filter((e) => !namesToDelete.has(e.name)));
      setSelected([]);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between p-8 border-b gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">Supplier</h1>
          <p className="text-sm font-light text-gray-600">
            Create a Supplier with contact and billing details for easy
            management.
          </p>
        </div>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button className="bg-[#53b700] hover:bg-[#53b700]/80 cursor-pointer text-white p-3 rounded-sm">
                <CirclePlus /> <span>Add new Supplier</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-10 rounded-3xl">
              <DialogHeader>
                <DialogTitle>Add Supplier</DialogTitle>
                <DialogDescription>
                  Fill the following details and add a new supplier
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium">Account Information</h1>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="name" className="text-xs">
                        Name
                      </Label>
                      <Input id="name" name="name" placeholder="Name" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="email" className="text-xs">
                        Email (Optional)
                      </Label>
                      <Input id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="mbnumber" className="text-xs">
                        Mobile Number (Optional)
                      </Label>
                      <Input
                        id="mbnumber"
                        name="mbnumber"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-medium">Billing Address</h1>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="streetaddress1" className="text-xs">
                        Street Address 1
                      </Label>
                      <Input
                        id="streetaddress1"
                        name="streetaddress1"
                        placeholder="Add Address"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="streetaddress2" className="text-xs">
                        Street Address 2 (Optional)
                      </Label>
                      <Input
                        id="streetaddress2"
                        name="streetaddress2"
                        placeholder="Add Address"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="city" className="text-xs">
                        City
                      </Label>
                      <Input id="city" name="city" placeholder="Add City" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="state" className="text-xs">
                        State (Optional)
                      </Label>
                      <Input id="state" name="state" placeholder="Add State" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="country" className="text-xs">
                        Country
                      </Label>
                      <Input
                        id="country"
                        name="country"
                        placeholder="Add Country"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="postcode" className="text-xs">
                        Postcode
                      </Label>
                      <Input
                        id="postcode"
                        name="postcode"
                        placeholder="Add Postcode"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button className="bg-transparent hover:bg-transparent text-black dark:text-white text-sm p-3 cursor-pointer">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="bg-[#53b700] hover:bg-[#53b700]/80 rounded-sm p-3 text-sm cursor-pointer"
                >
                  Create
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>

      <div className="flex items-center flex-wrap justify-end px-8 py-5 gap-4">
        <div className="relative">
          <Search className="absolute top-2 left-2 text-gray-500" size={20} />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="px-9"
          />
        </div>

        <Button className="bg-white text-black p-3 rounded-sm border text-sm cursor-pointer hover:bg-gray-50">
          <Funnel className="text-gray-700" /> <span>Filter</span>
        </Button>
        {selected.length > 0 && (
          <>
            <div className="flex gap-1 text-sm">
              {selected.length} <span>selected</span>
            </div>
            <div className="h-10">
              <Separator orientation="vertical" />
            </div>
            <Button
              onClick={handleDeselect}
              className="bg-white text-black p-3 rounded-sm border text-sm cursor-pointer hover:bg-gray-50"
            >
              Deselect
            </Button>
            <Button
              onClick={() => onDelete(null, selected)}
              className="bg-red-100 text-red-700 p-3 rounded-sm text-sm cursor-pointer hover:bg-red-200"
            >
              Delete
            </Button>
          </>
        )}
      </div>

      <div className="w-full px-8">
        <Table className="table-auto w-full border-collapse border-gray-500 overflow-hidden scrollbar-hide rounded-2xl">
          <TableHeader>
            <TableRow className="bg-[#54b700]/10 text-md font-bold">
              <TableHead className="py-5 text-left w-[2%]">{}</TableHead>
              <TableHead className="py-5 px-5 text-left w-[25%]">
                Name
              </TableHead>
              <TableHead className="py-5 px-3 text-center w-[25%]">
                Email
              </TableHead>
              <TableHead className="py-5 px-3 text-center w-[20%]">
                Phone
              </TableHead>
              <TableHead className="py-5 px-3 text-center w-[20%]">
                City
              </TableHead>
              <TableHead className="py-5 px-3 text-center w-[20%]">
                Actions
              </TableHead>
              <TableHead className="py-5 px-3 text-center w-[20%]">
                {}
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentItems.map((user, index) => (
              <TableRow key={index} className="border-b font-light text-md">
                <TableCell className="py-4 text-left font-medium w-[2%]">
                  <Checkbox
                    checked={selected.includes(user)}
                    onCheckedChange={() => toggleSelect(user)}
                    className="data-[state=checked]:bg-[#53b700] data-[state=checked]:text-white border-gray-400 data-[state=checked]:border-none dark:data-[state=checked]:bg-[#53b700] dark:data-[state=checked]:text-white"
                  />
                </TableCell>
                <TableCell className="py-4 px-5 text-left font-medium w-[25%] text-[#53b700] underline">
                  {user.name}
                </TableCell>
                <TableCell className="py-4 px-3 text-center w-[25%]">
                  {user.email}
                </TableCell>
                <TableCell className="py-4 px-3 text-center w-[20%]">
                  {user.phoneNumber}
                </TableCell>
                <TableCell className="py-4 px-3 text-center w-[20%]">
                  {user.city}
                </TableCell>
                <TableCell className="py-4 px-3 text-center w-[20%]">
                  <Button className="bg-transparent cursor-pointer hover:bg-transparent text-[#53b700] shadow-none border-none">
                    Create Invoice
                  </Button>
                </TableCell>
                <TableCell className="py-4 px-3 text-center w-[20%]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="border-none bg-transparent hover:bg-transparent cursor-pointer shadow-none text-black dark:text-white">
                        <Ellipsis />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col gap-2">
                      <Dialog>
                        <form>
                          <DialogTrigger asChild>
                            <Button className="cursor-pointer bg-transparent hover:bg-transparent text-black dark:text-white flex items-start justify-start gap-2 rounded-none">
                              {" "}
                              <Pencil /> Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px] p-10 rounded-3xl">
                            <DialogHeader>
                              <DialogTitle>Edit Supplier</DialogTitle>
                              <DialogDescription>
                                Fill the following details and edit the supplier
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col gap-8">
                              <div className="flex flex-col gap-2">
                                <h1 className="text-sm font-medium">
                                  Account Information
                                </h1>
                                <div className="grid grid-cols-2 gap-5">
                                  <div className="flex flex-col gap-1">
                                    <Label htmlFor="name" className="text-xs">
                                      Name
                                    </Label>
                                    <Input
                                      id="name"
                                      name="name"
                                      placeholder="Name"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <Label htmlFor="email" className="text-xs">
                                      Email (Optional)
                                    </Label>
                                    <Input
                                      id="email"
                                      name="email"
                                      placeholder="Email"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <Label
                                      htmlFor="mbnumber"
                                      className="text-xs"
                                    >
                                      Mobile Number (Optional)
                                    </Label>
                                    <Input
                                      id="mbnumber"
                                      name="mbnumber"
                                      placeholder="Mobile Number"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <h1 className="text-sm font-medium">
                                  Billing Address
                                </h1>
                                <div className="grid grid-cols-2 gap-5">
                                  <div className="flex flex-col gap-1">
                                    <Label
                                      htmlFor="streetaddress1"
                                      className="text-xs"
                                    >
                                      Street Address 1
                                    </Label>
                                    <Input
                                      id="streetaddress1"
                                      name="streetaddress1"
                                      placeholder="Add Address"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <Label
                                      htmlFor="streetaddress2"
                                      className="text-xs"
                                    >
                                      Street Address 2 (Optional)
                                    </Label>
                                    <Input
                                      id="streetaddress2"
                                      name="streetaddress2"
                                      placeholder="Add Address"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <Label htmlFor="city" className="text-xs">
                                      City
                                    </Label>
                                    <Input
                                      id="city"
                                      name="city"
                                      placeholder="Add City"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <Label htmlFor="state" className="text-xs">
                                      State (Optional)
                                    </Label>
                                    <Input
                                      id="state"
                                      name="state"
                                      placeholder="Add State"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <Label
                                      htmlFor="country"
                                      className="text-xs"
                                    >
                                      Country
                                    </Label>
                                    <Input
                                      id="country"
                                      name="country"
                                      placeholder="Add Country"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <Label
                                      htmlFor="postcode"
                                      className="text-xs"
                                    >
                                      Postcode
                                    </Label>
                                    <Input
                                      id="postcode"
                                      name="postcode"
                                      placeholder="Add Postcode"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button className="bg-transparent hover:bg-transparent text-black dark:text-white text-sm p-3 cursor-pointer">
                                  Cancel
                                </Button>
                              </DialogClose>
                              <Button
                                type="submit"
                                className="bg-[#53b700] hover:bg-[#53b700]/80 rounded-sm p-3 text-sm cursor-pointer"
                              >
                                Create
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </form>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="cursor-pointer not-odd:bg-transparent hover:bg-transparent text-black dark:text-white flex items-start justify-start gap-2 rounded-none">
                            <Trash2 />
                            Delete
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <Image
                              src={"/delete.svg"}
                              alt="delete"
                              width={150}
                              height={150}
                            />
                            <DialogTitle>
                              Are you sure you want to Delete its Supplier?
                            </DialogTitle>
                            <DialogDescription>
                              Deleting the supplier will delete its entire
                              history
                            </DialogDescription>
                          </DialogHeader>

                          <DialogFooter>
                            <Button
                              onClick={() => onDelete(user)}
                              className="bg-[#53b700] hover:bg-[#53b700]/80 rounded-sm"
                            >
                              Delete
                            </Button>
                            <DialogClose asChild>
                              <Button variant="outline" className="rounded-sm">
                                Cancel
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter></TableFooter>
        </Table>

        <div className="flex items-center border-t justify-between px-5 py-5">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1}–{endIndex} of {totalItems} items
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supplier;
