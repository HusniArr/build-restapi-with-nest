import { Injectable } from '@nestjs/common';
import { Products } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { Action } from '../enum/action.enum';
import { Ability, AbilityBuilder, InferSubjects, AbilityClass, ExtractSubjectType } from '@casl/ability';


type Subjects = InferSubjects<typeof Products | typeof User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
	createForUser(user:User){
		const { can, cannot, build } = new AbilityBuilder<
			Ability<[Action, Subjects]>
		>(Ability as AbilityClass<AppAbility>);

		if(user.isadmin){
			can(Action.Manage,'all');
			
		}else{
			can(Action.Read,'all');	
			cannot(Action.Delete,Products);
			
		}
		
		return build({
			// Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
			detectSubjectType: item => item.constructor as ExtractSubjectType<Subjects>
		});
	}
}
