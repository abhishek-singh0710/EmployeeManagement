// 'use client';

// import React, { useState } from 'react'
// import { Search, ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// const sidebarItems = [
//   { icon: '🏫', label: 'Classes' },
//   { icon: '📊', label: 'Student Analytics' },
//   { icon: '📝', label: 'Assignments' },
//   { icon: '📚', label: 'Grades' },
//   { icon: '📢', label: 'Announcements' },
//   { icon: '👤', label: 'Profile' },
//   { icon: '⚙', label: 'Settings' },
//   { icon: '❓', label: 'Help' },
// ]

// const profileSections = [
//   'Personal Details',
//   'Publications',
//   'Projects',
//   'Thesis Supervision',
//   'Event Organised',
//   'Visits',
//   'Conference/Symposium',
//   'Others',
//   'Project Management Forms',
//   'My Profile',
// ]

// export default function ProfessorDashboard() {
//   const [searchQuery, setSearchQuery] = useState('')
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
//   const [selectedSection, setSelectedSection] = useState(null)

//   const renderPublicationForm = () => {
//     return (
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>Publications</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Tabs defaultValue="journal">
//             <TabsList className="grid w-full grid-cols-3">
//               <TabsTrigger value="journal">Journal</TabsTrigger>
//               <TabsTrigger value="conference">Conferences</TabsTrigger>
//               <TabsTrigger value="books">Books</TabsTrigger>
//             </TabsList>
//             <TabsContent value="journal">
//               <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
//                     <Input id="author" placeholder="Author" />
//                   </div>
//                   <div>
//                     <label htmlFor="co-author" className="block text-sm font-medium text-gray-700">Co-author(s)</label>
//                     <Input id="co-author" placeholder="Co-Author" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="journal-name" className="block text-sm font-medium text-gray-700">Journal Name</label>
//                   <Input id="journal-name" placeholder="Name of the Journal" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="journal-file" className="block text-sm font-medium text-gray-700">Journal File</label>
//                     <Input id="journal-file" type="file" />
//                   </div>
//                   <div>
//                     <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Year" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {[...Array(10)].map((_, i) => (
//                           <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
//                             {new Date().getFullYear() - i}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//                   <Input id="title" placeholder="Title" />
//                 </div>
//                 <Button type="submit">Save</Button>
//               </form>
//             </TabsContent>
//             <TabsContent value="conference">
//               <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
//                     <Input id="author" placeholder="Author" />
//                   </div>
//                   <div>
//                     <label htmlFor="co-author" className="block text-sm font-medium text-gray-700">Co-author(s)</label>
//                     <Input id="co-author" placeholder="Co-Author" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="conference-name" className="block text-sm font-medium text-gray-700">Conference Name</label>
//                   <Input id="conference-name" placeholder="Name of the Conference" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="conference-file" className="block text-sm font-medium text-gray-700">Conference File</label>
//                     <Input id="conference-file" type="file" />
//                   </div>
//                   <div>
//                     <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Year" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {[...Array(10)].map((_, i) => (
//                           <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
//                             {new Date().getFullYear() - i}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//                   <Input id="title" placeholder="Title" />
//                 </div>
//                 <Button type="submit">Save</Button>
//               </form>
//             </TabsContent>
//             <TabsContent value="books">
//               <form className="space-y-4">
//                 <div>
//                   <label htmlFor="publish-type" className="block text-sm font-medium text-gray-700">Publish Type</label>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="book">Book</SelectItem>
//                       <SelectItem value="chapter">Book Chapter</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div>
//                   <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
//                   <Input id="author" placeholder="Author" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">Publisher</label>
//                     <Input id="publisher" placeholder="Publisher" />
//                   </div>
//                   <div>
//                     <label htmlFor="year" className="block text-sm font-medium text-gray-700">Publishing Year</label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Year" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {[...Array(10)].map((_, i) => (
//                           <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
//                             {new Date().getFullYear() - i}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//                   <Input id="title" placeholder="Title" />
//                 </div>
//                 <Button type="submit">Save</Button>
//               </form>
//             </TabsContent>
//           </Tabs>
//         </CardContent>
//       </Card>
//     );
//   };

//   const renderProjectForm = () => {
//     return (
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>Projects</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Tabs defaultValue="research">
//             <TabsList className="grid w-full grid-cols-4">
//               <TabsTrigger value="research">Research Projects</TabsTrigger>
//               <TabsTrigger value="consultancy">Consultancy Projects</TabsTrigger>
//               <TabsTrigger value="patents">Patents</TabsTrigger>
//               <TabsTrigger value="technology">Technology Transfers</TabsTrigger>
//             </TabsList>
//             <TabsContent value="research">
//               <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="pi" className="block text-sm font-medium text-gray-700">Project Incharge(PI)</label>
//                     <Input id="pi" placeholder="(PI)" />
//                   </div>
//                   <div>
//                     <label htmlFor="co-pi" className="block text-sm font-medium text-gray-700">Co-Project Incharge(CO-PI)</label>
//                     <Input id="co-pi" placeholder="(CO-PI)" />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="funding-agency" className="block text-sm font-medium text-gray-700">Funding Agency</label>
//                     <Input id="funding-agency" placeholder="Funding Agency" />
//                   </div>
//                   <div>
//                     <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Status" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="ongoing">Ongoing</SelectItem>
//                         <SelectItem value="completed">Completed</SelectItem>
//                         <SelectItem value="pending">Pending</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4">
//                   <div>
//                     <label htmlFor="submission-date" className="block text-sm font-medium text-gray-700">Submission Date</label>
//                     <Input id="submission-date" type="date" />
//                   </div>
//                   <div>
//                     <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
//                     <Input id="start-date" type="date" />
//                   </div>
//                   <div>
//                     <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">Expected Finish Date</label>
//                     <Input id="end-date" type="date" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="financial-outlay" className="block text-sm font-medium text-gray-700">Financial Outlay</label>
//                   <Input id="financial-outlay" type="number" placeholder="Financial Outlay" />
//                 </div>
//                 <div>
//                   <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title of Project</label>
//                   <Input id="title" placeholder="Title of Project" />
//                 </div>
//                 <Button type="submit">Save</Button>
//               </form>
//             </TabsContent>
//             <TabsContent value="consultancy">
//               <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="consultant" className="block text-sm font-medium text-gray-700">Consultant</label>
//                     <Input id="consultant" placeholder="Consultant" />
//                   </div>
//                   <div>
//                     <label htmlFor="client" className="block text-sm font-medium text-gray-700">Client</label>
//                     <Input id="client" placeholder="Client" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="financial-outlay" className="block text-sm font-medium text-gray-700">Financial Outlay</label>
//                   <Input id="financial-outlay" type="number" placeholder="Financial Outlay" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
//                     <Input id="start-date" type="date" />
//                   </div>
//                   <div>
//                     <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
//                     <Input id="end-date" type="date" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//                   <Input id="title" placeholder="Title" />
//                 </div>
//                 <Button type="submit">Save</Button>
//               </form>
//             </TabsContent>
//             <TabsContent value="patents">
//               <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="patent-number" className="block text-sm font-medium text-gray-700">Patent Number</label>
//                     <Input id="patent-number" placeholder="Patent Number" />
//                   </div>
//                   <div>
//                     <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Status" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="pending">Pending</SelectItem>
//                         <SelectItem value="approved">Approved</SelectItem>
//                         <SelectItem value="rejected">Rejected</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="earning" className="block text-sm font-medium text-gray-700">Earning(in Rs.)</label>
//                   <Input id="earning" type="number" placeholder="Earning" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Year" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {[...Array(10)].map((_, i) => (
//                           <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
//                             {new Date().getFullYear() - i}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div>
//                     <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month</label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Month" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
//                           <SelectItem key={index} value={(index + 1).toString().padStart(2, '0')}>
//                             {month}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//                   <Input id="title" placeholder="Title" />
//                 </div>
//                 <Button type="submit">Save</Button>
//               </form>
//             </TabsContent>
//             <TabsContent value="technology">
//               <form className="space-y-4">
//                 <div>
//                   <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
//                   <Input id="details" placeholder="Details" />
//                 </div>
//                 <Button type="submit">Save</Button>
//               </form>
//             </TabsContent>
//           </Tabs>
//         </CardContent>
//       </Card>
//     );
//   };

//   const renderForm = () => {
//     if (!selectedSection) return null;
//     if (selectedSection === 'Publications') return renderPublicationForm();
//     if (selectedSection === 'Projects') return renderProjectForm();

//     return (
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>{selectedSection} Form</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p>This is a placeholder form for {selectedSection}. Add your form fields here.</p>
//           <Input className="mt-4" placeholder="Sample input field" />
//           <Button className="mt-4">Submit</Button>
//         </CardContent>
//       </Card>
//     );
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 text-gray-900">
//       {/* Sidebar */}
//       <aside className={`fixed left-0 top-0 h-full bg-white shadow-md transition-all duration-300 ease-in-out z-20 ${sidebarCollapsed ? '-translate-x-full' : 'translate-x-0'}`} style={{width: '16rem'}}>
//         <div className="p-4 flex justify-between items-center">
//           <img src="/placeholder.svg?height=40&width=120" alt="IITDM Logo" />
//           <Button variant="ghost" size="icon" onClick={() => setSidebarCollapsed(true)}>
//             <X className="h-6 w-6" />
//           </Button>
//         </div>
//         <nav>
//           {sidebarItems.map((item, index) => (
//             <div key={index}>
//               <a
//                 href="#"
//                 className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-200"
//               >
//                 <span className="flex items-center">
//                   <span className="mr-2">{item.icon}</span>
//                   {item.label}
//                 </span>
//               </a>
//             </div>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className={`flex-1 p-8 overflow-auto transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'ml-0' : 'ml-64'}`}>
//         <div className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <Button variant="ghost" size="icon" onClick={() => setSidebarCollapsed(false)} className={sidebarCollapsed ? 'visible' : 'invisible'}>
//               <Menu className="h-6 w-6" />
//             </Button>
//             <div className="text-sm breadcrumbs">
//               <span>Home</span> &gt; <span>Dashboard</span> &gt; <span>{selectedSection || 'Overview'}</span>
//             </div>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button variant="ghost" size="icon" className="rounded-full">
//                   <Avatar>
//                     <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Professor Avatar" />
//                     <AvatarFallback>MP</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-80" align="end">
//                 <div className="flex flex-col items-center">
//                   <Avatar className="w-20 h-20 mb-2">
//                     <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Professor Avatar" />
//                     <AvatarFallback>MP</AvatarFallback>
//                   </Avatar>
//                   <h2 className="text-xl font-semibold">Prof. Maitrek Patel</h2>
//                   <p className="text-sm text-gray-500">Professor | CSE Department</p>
//                   <div className="flex space-x-2 mt-2">
//                     <Badge>PhD</Badge>
//                     <Badge>B.Tech | CSE</Badge>
//                     <Badge>Experience: 10 Years</Badge>
//                   </div>
//                   <div className="flex space-x-2 mt-4 w-full">
//                     <Button className="flex-1">Profile</Button>
//                     <Button variant="outline" className="flex-1">Sign out</Button>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           </div>
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-bold">Professor Dashboard</h2>
//             <div className="relative w-64">
//               <Input
//                 type="text"
//                 placeholder="Search Here"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 pr-10 rounded-full"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               <Button variant="ghost" size="icon" className="absolute right-1 top-1">
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="flex">
//           {/* Left side buttons */}
//           <div className="w-1/4 pr-4">
//             {profileSections.map((section, index) => (
//               <Button
//                 key={index}
//                 variant="outline"
//                 className="w-full mb-2 justify-between"
//                 onClick={() => setSelectedSection(section)}
//               >
//                 {section}
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             ))}
//           </div>

//           {/* Right side form area */}
//           <div className="w-3/4">
//             {renderForm()}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

'use client';

import React, { useState } from 'react'
import { Search, ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const sidebarItems = [
  { icon: '🏫', label: 'Classes' },
  { icon: '📊', label: 'Student Analytics' },
  { icon: '📝', label: 'Assignments' },
  { icon: '📚', label: 'Grades' },
  { icon: '📢', label: 'Announcements' },
  { icon: '👤', label: 'Profile' },
  { icon: '⚙', label: 'Settings' },
  { icon: '❓', label: 'Help' },
]

const profileSections = [
  'Personal Details',
  'Publications',
  'Projects',
  'Thesis Supervision',
  'Event Organised',
  'Visits',
  'Conference/Symposium',
  'Others',
  'Project Management Forms',
  'My Profile',
]

export default function ProfessorDashboard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [selectedSection, setSelectedSection] = useState(null)

  const renderPublicationForm = () => {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Publications</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="journal">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="journal">Journal</TabsTrigger>
              <TabsTrigger value="conference">Conferences</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
            </TabsList>
            <TabsContent value="journal">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <Input id="author" placeholder="Author" />
                  </div>
                  <div>
                    <label htmlFor="co-author" className="block text-sm font-medium text-gray-700">Co-author(s)</label>
                    <Input id="co-author" placeholder="Co-Author" />
                  </div>
                </div>
                <div>
                  <label htmlFor="journal-name" className="block text-sm font-medium text-gray-700">Journal Name</label>
                  <Input id="journal-name" placeholder="Name of the Journal" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="journal-file" className="block text-sm font-medium text-gray-700">Journal File</label>
                    <Input id="journal-file" type="file" />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10)].map((_, i) => (
                          <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
                            {new Date().getFullYear() - i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Input id="title" placeholder="Title" />
                </div>
                <Button type="submit">Save</Button>
              </form>
            </TabsContent>
            <TabsContent value="conference">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <Input id="author" placeholder="Author" />
                  </div>
                  <div>
                    <label htmlFor="co-author" className="block text-sm font-medium text-gray-700">Co-author(s)</label>
                    <Input id="co-author" placeholder="Co-Author" />
                  </div>
                </div>
                <div>
                  <label htmlFor="conference-name" className="block text-sm font-medium text-gray-700">Conference Name</label>
                  <Input id="conference-name" placeholder="Name of the Conference" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="conference-file" className="block text-sm font-medium text-gray-700">Conference File</label>
                    <Input id="conference-file" type="file" />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10)].map((_, i) => (
                          <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
                            {new Date().getFullYear() - i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Input id="title" placeholder="Title" />
                </div>
                <Button type="submit">Save</Button>
              </form>
            </TabsContent>
            <TabsContent value="books">
              <form className="space-y-4">
                <div>
                  <label htmlFor="publish-type" className="block text-sm font-medium text-gray-700">Publish Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="book">Book</SelectItem>
                      <SelectItem value="chapter">Book Chapter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                  <Input id="author" placeholder="Author" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">Publisher</label>
                    <Input id="publisher" placeholder="Publisher" />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">Publishing Year</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10)].map((_, i) => (
                          <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
                            {new Date().getFullYear() - i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Input id="title" placeholder="Title" />
                </div>
                <Button type="submit">Save</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    );
  };

  const renderProjectForm = () => {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="research">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="research">Research Projects</TabsTrigger>
              <TabsTrigger value="consultancy">Consultancy Projects</TabsTrigger>
              <TabsTrigger value="patents">Patents</TabsTrigger>
              <TabsTrigger value="technology">Technology Transfers</TabsTrigger>
            </TabsList>
            <TabsContent value="research">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pi" className="block text-sm font-medium text-gray-700">Project Incharge(PI)</label>
                    <Input id="pi" placeholder="(PI)" />
                  </div>
                  <div>
                    <label htmlFor="co-pi" className="block text-sm font-medium text-gray-700">Co-Project Incharge(CO-PI)</label>
                    <Input id="co-pi" placeholder="(CO-PI)" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="funding-agency" className="block text-sm font-medium text-gray-700">Funding Agency</label>
                    <Input id="funding-agency" placeholder="Funding Agency" />
                  </div>
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="submission-date" className="block text-sm font-medium text-gray-700">Submission Date</label>
                    <Input id="submission-date" type="date" />
                  </div>
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">Expected Finish Date</label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>
                <div>
                  <label htmlFor="financial-outlay" className="block text-sm font-medium text-gray-700">Financial Outlay</label>
                  <Input id="financial-outlay" type="number" placeholder="Financial Outlay" />
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title of Project</label>
                  <Input id="title" placeholder="Title of Project" />
                </div>
                <Button type="submit">Save</Button>
              </form>
            </TabsContent>
            <TabsContent value="consultancy">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="consultant" className="block text-sm font-medium text-gray-700">Consultant</label>
                    <Input id="consultant" placeholder="Consultant" />
                  </div>
                  <div>
                    <label htmlFor="client" className="block text-sm font-medium text-gray-700">Client</label>
                    <Input id="client" placeholder="Client" />
                  </div>
                </div>
                <div>
                  <label htmlFor="financial-outlay" className="block text-sm font-medium text-gray-700">Financial Outlay</label>
                  <Input id="financial-outlay" type="number" placeholder="Financial Outlay" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Input id="title" placeholder="Title" />
                </div>
                <Button type="submit">Save</Button>
              </form>
            </TabsContent>
            <TabsContent value="patents">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patent-number" className="block text-sm font-medium text-gray-700">Patent Number</label>
                    <Input id="patent-number" placeholder="Patent Number" />
                  </div>
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="earning" className="block text-sm font-medium text-gray-700">Earning(in Rs.)</label>
                  <Input id="earning" type="number" placeholder="Earning" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10)].map((_, i) => (
                          <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
                            {new Date().getFullYear() - i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                          <SelectItem key={index} value={(index + 1).toString().padStart(2, '0')}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Input id="title" placeholder="Title" />
                </div>
                <Button type="submit">Save</Button>
              </form>
            </TabsContent>
            <TabsContent value="technology">
              <form className="space-y-4">
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
                  <Input id="details" placeholder="Details" />
                </div>
                <Button type="submit">Save</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    );
  };

  const renderForm = () => {
    if (!selectedSection) return null;
    if (selectedSection === 'Publications') return renderPublicationForm();
    if (selectedSection === 'Projects') return renderProjectForm();

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{selectedSection} Form</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a placeholder form for {selectedSection}. Add your form fields here.</p>
          <Input className="mt-4" placeholder="Sample input field" />
          <Button className="mt-4">Submit</Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-white shadow-md transition-all duration-300 ease-in-out z-20 ${sidebarCollapsed ? '-translate-x-full' : 'translate-x-0'}`} style={{width: '16rem'}}>
        <div className="p-4 flex justify-between items-center">
          <img src="/placeholder.svg?height=40&width=120" alt="IITDM Logo" />
          <Button variant="ghost" size="icon" onClick={() => setSidebarCollapsed(true)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav>
          {sidebarItems.map((item, index) => (
            <div key={index}>
              <a
                href="#"
                className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                <span className="flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </span>
              </a>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 p-8 overflow-auto transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'ml-0' : 'ml-64'}`}>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <Button variant="ghost" size="icon" onClick={() => setSidebarCollapsed(false)} className={sidebarCollapsed ? 'visible' : 'invisible'}>
              <Menu className="h-6 w-6" />
            </Button>
            <div className="text-sm breadcrumbs">
              <span>Home</span> &gt; <span>Dashboard</span> &gt; <span>{selectedSection || 'Overview'}</span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Professor Avatar" />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 mb-2">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Professor Avatar" />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold">Prof. Maitrek Patel</h2>
                  <p className="text-sm text-gray-500">Professor | CSE Department</p>
                  <div className="flex space-x-2 mt-2">
                    <Badge>PhD</Badge>
                    <Badge>B.Tech | CSE</Badge>
                    <Badge>Experience: 10 Years</Badge>
                  </div>
                  <div className="flex space-x-2 mt-4 w-full">
                    <Button className="flex-1">Profile</Button>
                    <Button variant="outline" className="flex-1">Sign out</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Professor Dashboard</h2>
            <div className="relative w-64">
              <Input
                type="text"
                placeholder="Search Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 rounded-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Left side buttons */}
          <div className="w-1/4 pr-4">
            {profileSections.map((section, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full mb-2 justify-between"
                onClick={() => setSelectedSection(section)}
              >
                {section}
                <ChevronRight className="h-4 w-4" />
              </Button>
            ))}
          </div>

          {/* Right side form area */}
          <div className="w-3/4">
            {renderForm()}
          </div>
        </div>
      </main>
    </div>
  )
}