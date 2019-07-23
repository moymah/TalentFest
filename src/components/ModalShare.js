import React, {useState, useEffect} from 'react';
import firebase from '../firebaseConfig';

export default function (props) {
    const [funcionarios, setFuncionarios] = useState([]);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        firebase.firestore().collection("users")
        .get()
        .then(function(querySnapshot) {
          const listFuncionarios = querySnapshot.docs.map(function(doc) {
            return doc.data()
          });
          setFuncionarios(listFuncionarios);
        })
    }, [])

    useEffect(() => {
        console.log(selected)
    }, [selected])
    
 
    
    return(
        <section>
        <input list="search" name="searchFuncionarios"></input>
        <section>
        {funcionarios.map( (elem, index) => {
            return <section key={index} onClick={() => setSelected(elem.userUid)}>
            <img src='https://www.fiaregion1.com/wp-content/uploads/2018/06/gdpr_profile-picture.jpg' id={elem.userUid} alt='profile-image'/>
                <section>
                    <p htmlFor={elem.userUid}>{elem.name}</p>
                </section>
            </section>
        })}
        </section>
        </section>
    )

}