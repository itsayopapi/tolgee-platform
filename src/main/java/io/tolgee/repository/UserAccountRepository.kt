package io.tolgee.repository

import io.tolgee.model.UserAccount
import io.tolgee.model.views.UserAccountInRepositoryView
import io.tolgee.model.views.UserAccountWithOrganizationRoleView
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserAccountRepository : JpaRepository<UserAccount?, Long?> {
    fun findByUsername(username: String?): Optional<UserAccount>
    fun findByThirdPartyAuthTypeAndThirdPartyAuthId(thirdPartyAuthId: String, thirdPartyAuthType: String): Optional<UserAccount>

    @Query("""select userAccount.id as id, userAccount.name as name, userAccount.username as username, memberRole.type as organizationRole from UserAccount userAccount 
        join OrganizationRole memberRole on memberRole.user = userAccount and memberRole.organization.id = :organizationId
        where ((lower(userAccount.name)
        like lower(concat('%', :search,'%')) 
        or lower(userAccount.username) like lower(concat('%', :search,'%'))) or :search is null)
        """)
    fun getAllInOrganization(organizationId: Long, pageable: Pageable, search: String): Page<UserAccountWithOrganizationRoleView>

    @Query("""
        select ua.id as id, ua.name as name, ua.username as username, p.type as directPermissions, orl.type as organizationRole,
        orl.organization.id as oid, o.basePermissions as organizationBasePermissions from UserAccount ua, Repository r 
        left join Permission p on ua = p.user and p.repository.id = :repositoryId
        left join OrganizationRole orl on orl.user = ua and r.organizationOwner = orl.organization
        left join Organization  o on orl.organization = o
        where r.id = :repositoryId and (p is not null or orl is not null)
        and ((lower(ua.name)
        like lower(concat('%', :search,'%'))
        or lower(ua.username) like lower(concat('%', :search,'%'))) or :search is null)
    """)
    fun getAllInRepository(repositoryId: Long, pageable: Pageable, search: String? = ""): Page<UserAccountInRepositoryView>
}
