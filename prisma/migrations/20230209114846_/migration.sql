/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Book_id_belongsToId_key" ON "Book"("id", "belongsToId");
