import React from 'react';
import { graphql } from 'gatsby';
import EdNav from '../components/education-nav';

export default (props) => {
    const pageData = props.data.educationJson;
    return (
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul>
                {
                    pageData.items.map((item, index)=>(
                        <li key={index} className="bg-white shadow mt-4 flex">
                            {
                                item.platform && <p className="vertical-text">{item.platform}</p>
                            }
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span className="inline-block radius p-2 bg-purple-100 text-purple-700">{item.degree}</span>
                                    }
                                    {
                                        item.url && <a className="btn inline-block mt-4" href={item.url} target="_blank" rel="noopener noreferrer">Ver más</a>
                                    }
                                </div>
                                <div className="inline-block">
                                    <span className="inline-block p-2 text-l bg-green-100 text-green-700">{item.code}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <EdNav />
        </div>
    )
}

export const query = graphql`
    query($slug : String){
        educationJson(slug: { eq: $slug}){
            title
            description
            items {
                name
                degree
                code
                platform
                url
            }
        }
    }
`;