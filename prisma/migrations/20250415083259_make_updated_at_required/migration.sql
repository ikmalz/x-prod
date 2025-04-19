-- Ubah nilai NULL jadi sekarang, supaya gak error saat diubah jadi required
UPDATE `User` SET `updatedAt` = NOW() WHERE `updatedAt` IS NULL;

-- Baru setelah itu ubah jadi required
ALTER TABLE `User`
  MODIFY COLUMN `updatedAt` DATETIME(3) NOT NULL;
