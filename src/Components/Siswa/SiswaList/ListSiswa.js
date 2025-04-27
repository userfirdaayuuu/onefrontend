import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ListSiswa = ({ siswa = [] }) => { 
    return (
        <div>
            <h5 className="mb-3">Siswa Kursus</h5>
            <ListGroup>
                {siswa.length > 0 ? (
                    siswa.map((name, index) => (
                        <ListGroup.Item key={index}>
                            {index + 1}. {name}
                        </ListGroup.Item>
                    ))
                ) : (
                    <ListGroup.Item>Tidak ada siswa terdaftar</ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}

export default ListSiswa;
