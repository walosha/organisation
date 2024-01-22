-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" SET DEFAULT 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1974&auto=format';
