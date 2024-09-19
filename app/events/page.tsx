"use client";

import React, { useState } from "react";
import styles from "./events.module.scss";
import Folder from "@/components/Events/Folder/Folder";
import Category from "@/components/Events/Category/Category";

export default function EventsPage() {
  const [category, setCategory] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleSelect(selectedCategory: string) {
    setCategory(selectedCategory);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setCategory("");
  }

  return (
    <>
      <div className={styles.heading}>
        <h2>EVENTS</h2>
      </div>
      <div className={styles.folderContainer}>
        <Folder
          folderIcon={dance}
          isSelected={category === "dance"}
          onSelect={() => handleSelect("dance")}
        >
          Dance
        </Folder>
        <Folder
          folderIcon={music}
          isSelected={category === "music"}
          onSelect={() => handleSelect("music")}
        >
          Music
        </Folder>
        <Folder
          folderIcon={art}
          isSelected={category === "art"}
          onSelect={() => handleSelect("art")}
        >
          Art
        </Folder>
        <Folder
          folderIcon={camera}
          isSelected={category === "photography"}
          onSelect={() => handleSelect("photography")}
        >
          Photography
        </Folder>
        <Folder
          folderIcon={music}
          isSelected={category === "kernel"}
          onSelect={() => handleSelect("kernel")}
        >
          Kernel
        </Folder>
        <Folder
          folderIcon={fashion}
          isSelected={category === "fashion"}
          onSelect={() => handleSelect("fashion")}
        >
          Fashion
        </Folder>
        <Folder
          folderIcon={singing}
          isSelected={category === "profshow"}
          onSelect={() => handleSelect("profshow")}
        >
          ProfShow
        </Folder>
        <Folder
          folderIcon={music}
          isSelected={category === "lorem"}
          onSelect={() => handleSelect("lorem")}
        >
          Lorem
        </Folder>
      </div>
      <div className={styles.category}>
        <p>Please select a category</p>
      </div>

      {isModalOpen && (
        <div className={styles.fixedCategoryContainer}>
          <Category onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
}
