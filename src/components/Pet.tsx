import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Pet {
  id: number;
  name: string;
  type: string;
  image: string;
}

export default function PetsPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const handleAddPet = () => {
    if (name && type && image) {
      const newPet: Pet = {
        id: Date.now(),
        name,
        type,
        image
      };
      setPets([...pets, newPet]);
      setName("");
      setType("");
      setImage("");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Add a Pet</h2>
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Pet name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Pet type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12 mt-3 text-center">
          <button onClick={handleAddPet} className="btn btn-success">
            Add Pet
          </button>
        </div>
      </div>

      <h3 className="text-center mb-4">All Pets</h3>
      <div className="row g-4">
        {pets.map((pet) => (
          <div key={pet.id} className="col-12 col-sm-6 col-md-4">
            <div className="card text-center">
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="rounded-circle shadow mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">{pet.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
