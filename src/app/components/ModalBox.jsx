"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function Component() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="w-40 mt-5 text-4xl  hover:bg-primary-600" onClick={() => setOpenModal(true)}>
        Read More
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              I am a web developer with a passion for creating interactive and
              responsive web applications. I have experience working with HTML,
              CSS, JavaScript, React, Next js, Node.js, Express, Material UI,
              Tailwind CSS, MongoDB, Netlify
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              recusandae cumque adipisci numquam perferendis, ullam id velit cum
              quidem voluptate debitis incidunt expedita similique optio laborum
              aliquid assumenda, exercitationem, nobis excepturi impedit. Ullam
              esse ipsam quae incidunt id nam consequuntur cum dolores. Vitae,
              nostrum voluptate obcaecati pariatur impedit deserunt ipsum ad
              facere voluptatibus veritatis odit mollitia sapiente ut ducimus
              quas totam quod animi libero distinctio excepturi rerum
              doloremque? Accusamus iste repudiandae optio! Quidem itaque quasi
              deserunt possimus sit. Vero magnam nobis adipisci. Temporibus
              necessitatibus ullam inventore mollitia pariatur fuga, alias vitae
              consectetur tempore cum saepe labore optio maxime fugiat magni.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer ></Modal.Footer>
      </Modal>
    </>
  );
}
