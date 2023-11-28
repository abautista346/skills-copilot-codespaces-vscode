function skillsMember() { 
    return {
        restrict: 'E', 
        templateUrl: 'modules/skills/views/member.html', 
        controller: 'SkillsMemberController', 
        controlleras: 'vm', 
        bindToController: true, 
        scope: { 
            member: '='
        }
    };
}
 