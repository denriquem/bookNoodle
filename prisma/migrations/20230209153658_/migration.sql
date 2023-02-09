/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Review_id_belongsToId_key" ON "Review"("id", "belongsToId");
