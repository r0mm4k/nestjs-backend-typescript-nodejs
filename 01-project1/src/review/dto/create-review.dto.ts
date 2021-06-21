import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(1, { message: 'Рейтинг не может быть менее 1' })
  @Max(5)
  rating: number;

  @IsString()
  productId: string;
}
