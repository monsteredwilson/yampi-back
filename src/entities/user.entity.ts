import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert } from 'typeorm';

@Entity('user')
class User {

	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ type: 'varchar', length: 100 })
	email: string;

	@Column({ type: 'varchar', length: 100 })
	password: string;

	@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	createdAt: Date;

	@BeforeInsert()
	updateCreatedAt() {
		this.createdAt = new Date();
	}
}

export default User;
