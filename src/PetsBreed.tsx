import { useParams } from "react-router-dom";
import { useState } from "react";
import type { User } from "firebase/auth";
import Lottie from "lottie-react";
import pawBackground from "./assets/paw-background.json";
import Sidebar from "./sidebar";
import Transition from "./Transition";

export default function PetsBreed({ user }: { user: User | null }) {
  const { type } = useParams();
  const [search, setSearch] = useState("");

  const breedMap: Record<string, string[]> = {
    dogs: [
      "Labrador Retriever", "German Shepherd", "Golden Retriever",
      "Bulldog", "Poodle", "Beagle", "Rottweiler", "Boxer"
    ],
    cats: [
      "Persian", "Siamese", "Maine Coon", "Ragdoll", "Sphynx",
      "British Shorthair", "Bengal", "Russian Blue"
    ],
    birds: [
      "Parrot", "Budgerigar", "Columbidae", "Common Blackbird",
      "Finches", "Blue Birds", "Falcon", "Owl"
    ]
  };

  const breeds = breedMap[type || ""] || [];

  const filteredBreeds = breeds.filter(breed =>
    breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Transition>
      <div className="position-relative min-vh-100 overflow-hidden bg-white dark:bg-gray-900">
        {/* Lottie Background */}
        <Lottie
          animationData={pawBackground}
          loop
          autoplay
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            zIndex: 0,
            opacity: 0.2,
            pointerEvents: "none",
            objectFit: "cover"
          }}
        />

        <div className="container px-3 mx-auto position-relative" style={{ maxWidth: "1300px", zIndex: 1 }}>
          <div className="row min-vh-100">
            <div className="col-12 col-md-3 p-0">
              <Sidebar user={user} />
            </div>

            <main className="col-12 col-md-9 py-4">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
                <h2 className="text-capitalize m-0">{type}</h2>
                <input
                  type="text"
                  className="form-control w-100 w-sm-50"
                  placeholder={`Search ${type}...`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="row g-4">
                {filteredBreeds.length > 0 ? (
                  filteredBreeds.map((breed, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="bg-white dark:bg-gray-800 border rounded shadow-sm p-3 text-center h-100">
                        <img
                          src={`https://source.unsplash.com/100x100/?${breed}-${type}`}
                          alt={breed}
                          className="rounded-circle mb-3"
                          style={{ objectFit: "cover", width: "80px", height: "80px" }}
                        />
                        <h5 className="mb-2">{breed}</h5>
                        <button className="btn btn-primary btn-sm">Adopt</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No breeds found.</p>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </Transition>
  );
}
