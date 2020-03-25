import React from 'react';
import { useStaticQuery, grap, graphql} from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';
import Course from './course';

export default () => {
    const data = useStaticQuery(graphql` {
        codigoFacilitoJson {
          data {
            courses {
              title
              progress
              url
            }
            certificates {
                code
                score
                title
              }
          }
        }
    }`);

    console.log(data);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts 
                        data={data.codigoFacilitoJson.data.certificates} 
                        card={Certificate}
                        title="Mis certificados online en CódigoFacilito" />

                    <Posts 
                        data={data.codigoFacilitoJson.data.courses} 
                        card={Course}
                        title="Mis cursos en CódigoFacilito" />
                    
                </div>
            </div>
        </section>
    );
}