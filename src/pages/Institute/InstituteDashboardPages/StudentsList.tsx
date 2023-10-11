import React from 'react'
import ABTable from '../../../components/ABTable';

export default function StudentsList() {
    const data = [

        {
            id: 1,
            name: "SHAHMEER",
            course: "WEB & APP Development",
            enrolled: false,
        },
        {
            id: 2,
            name: "Shahzaib",
            course: "WEB & APP Development",
            enrolled: true,
        },
        {
            id: 3,
            name: "Ammad",
            course: "WEB & APP Development",
            enrolled: true,
        },
        
        {
            id: 4,
            name: "Waleed",
            course: "WEB & APP Development",
            enrolled: true,
        },
        {
            id: 5,
            name: "Mursalin",
            course: "WEB & APP Development",
            enrolled: false,
        },
     
    ];
    return (
        <>
            <div className="border border-4 border-dark p-4 m-3">
                <h1></h1>
                <ABTable
                    label="Student List"
                    dataSource={data}
                    cols={[
                        {
                            displayName: "Id",
                            key: "id",
                        },
                        {
                            displayName: "Name",
                            key: "name",
                        },
                        {
                            displayName: "Course",
                            key: "course",
                        },
                    ]}
                />
            </div>
        </>
    )
}
